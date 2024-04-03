'use client';
import { Button, List, Space, Typography, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useCallback, useState } from 'react';
import { isEmpty } from 'lodash';
import { createClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';
import BPromise from 'bluebird';
import { LoadingOutlined } from '@ant-design/icons';

const supabase = createClient(
  'https://pkhgktqlqtoiqgultdor.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBraGdrdHFscXRvaXFndWx0ZG9yIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MjAyNjcwNSwiZXhwIjoyMDA3NjAyNzA1fQ.Kn5MLTVcq2czIE7Q7ks5VR5xNMD1y5nl3aPTf9GuMYs'
);

export default function ImagaePage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [coppy, setCoppy] = useState([]);
  const onChangeUpload = useCallback(
    ({ file }: any) => {
      try {
        if (['done', 'error'].includes(file.status)) {
          setImages([...images, file] as any);
        }
      } catch (error) {}
    },
    [images]
  );

  const uploadFiles = async () => {
    try {
      setLoading(true);
      const links = [] as any;
      await BPromise.map(
        images,
        async (file: any) => {
          try {
            const orgFile = file.originFileObj;
            const folder = `${uuidv4()}/${file.name}`;
            console.log('🚀 ~ file: images.tsx:36 ~ folder:', folder);

            const { data, error } = await supabase.storage
              .from('qr_code')
              .upload(`${uuidv4()}/${file.name}`, orgFile, {
                cacheControl: '3600',
                upsert: false,
              });
            if (data) {
              message.success(`${data.path}`);
              links.push(
                `https://pkhgktqlqtoiqgultdor.supabase.co/storage/v1/object/public/qr_code/${data.path}`
              );
            }
            setCoppy(links);
            console.log('🚀 ~ file: images.tsx:40 ~ data:', data);
          } catch (error) {}
        },
        {
          concurrency: 5,
        }
      );
    } catch (error: any) {
      message.error(`Cause an error when upload file: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Space size={12}>
      <Upload multiple onChange={onChangeUpload}>
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>
      {loading && (
        <Typography.Text>
          <LoadingOutlined /> Uploaded {images.length} items ...
        </Typography.Text>
      )}
      {!isEmpty(images) && (
        <Button loading={loading} onClick={uploadFiles} type="primary">
          Save
        </Button>
      )}
      <Typography.Text copyable={{ text: coppy.toString() }}>
        Copy {coppy.length} items
      </Typography.Text>
      <List
        bordered
        dataSource={coppy}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </Space>
  );
}

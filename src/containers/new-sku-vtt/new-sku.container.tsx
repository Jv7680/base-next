import { config } from '@/configs';
import { GetSkuRequest } from '@/data';
import { AppModal, FormInput, FormInputItem, Heading3 } from '@/lib/components';
import { newSkuActions, useAppDispatch } from '@/redux';
import { removeEmptyField } from '@/utils';
import { Button, Form, Input, Modal, Select, Space, message } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import axios from 'axios';
import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { NewSkuFilterComponent, NewSkuTableComponent } from './components';
import { useNewSkuQueryParams } from './context';

const StyledContent = styled(Space)`
  padding: 32px 32px 0 32px;
  background: white;
  height: 100%;
`;

// TODO: Define interface model for order, order detail here.

interface CreateSkuDto {
  code: string;
  name: string;
  dataAmountValue: string;
  dayAmountValue: string;
  unit: string;
  status: string;
  recordedCost: number;
  costCurrency: string;
  minPrice: number;
  type: string;
  simType: string;
  purchaseType: string;
  dataType: string;
  vendorSku: string;
  operator: string;
  dataResetTime: string;
  networkType: string;
  throttle: string;
  countryRegion: string;
  apn: string;
  planType: string;
  hotspot: string;
  carrier: string;
  onsiteCarrier: string;
  note?: string;
  vendorId: string;
}

export const NewSkuManagementContainer = (): ReactNode => {
  const dispatch = useAppDispatch();

  const [createSkuForm] = useForm();
  const [updateSkuForm] = useForm();
  const [isUpdateSkuModalVisible, setUpdateSkuModalVisibility] =
    useState<boolean>(false);
  const [isCreateSkuModalVisible, setCreateSkuModalVisibility] =
    useState<boolean>(false);

  const [isLoadingCreateSku, setLoadingCreateSku] = useState<boolean>(false);

  const [queryParams] = useNewSkuQueryParams();

  useEffect(() => {
    handleGetAllCategories();
    handleGetAllVendors();
  }, []);

  useEffect(() => {
    handleGetSkus();
  }, [queryParams]);

  const handleGetSkus = async () => {
    const body: GetSkuRequest = removeEmptyField(queryParams);
    const headers = {
      'X-Authorization': config.gohubBackend.api.authorizationKey as string,
    };

    await dispatch(newSkuActions.getListSku({ body, headers }));
  };

  const handleGetAllCategories = async () => {
    const headers = {
      'X-Authorization': config.gohubBackend.api.authorizationKey as string,
    };

    await dispatch(newSkuActions.getAllCategories(headers));
  };

  const handleGetAllVendors = useCallback(async () => {
    const headers = {
      'X-Authorization': config.gohubBackend.api.authorizationKey as string,
    };

    await dispatch(newSkuActions.getAllVendors(headers));
  }, []);

  const handleDeleteSku = useCallback(
    (id: string) => {
      Modal.confirm({
        title: 'Are you sure to delete this sku',
        content: 'Once you delete this, you will not revert back it again',
        okText: 'Confirm',
        cancelText: 'Cancel',
        onOk: async () => {
          try {
            const response = await axios.delete(
              `${config.gohubBackend.api.baseUrl}/skus/${id}`,
              {
                headers: {
                  'X-Authorization': config.gohubBackend.api
                    .authorizationKey as string,
                },
              }
            );

            message.success('Delete Sku successfully');

            await handleGetSkus();
          } catch (error: any) {
            let errorMessage = error.message;
            if (axios.isAxiosError(error)) {
              const { response } = error;
              if (response) {
                const { data } = response as any;
                const { message: apiErrorMessage } = data;

                errorMessage = apiErrorMessage;
              }
            }

            message.error(`Cause an error when delete sku: ${errorMessage}`);
          }
        },
      });
    },
    [queryParams]
  );

  const handleCancelUpdateSkuModal = useCallback(() => {
    setUpdateSkuModalVisibility(false);
  }, []);

  const handleCancelCreateSkuModal = useCallback(() => {
    createSkuForm.resetFields();

    setCreateSkuModalVisibility(false);
  }, []);

  const handleCreateSku = useCallback(async () => {
    // phase 2
    // const body = JSON.parse(JSON.stringify({ ...queryParams }));
    // const headers = {
    //   'X-Authorization': config.gohubBackend.api.authorizationKey as string,
    // };

    // await dispatch(newSkuActions.createSku({ body, headers }));

    try {
      const { code, name } = createSkuForm.getFieldsValue();
      setLoadingCreateSku(true);

      const payload: CreateSkuDto = {
        code,
        name,
        dataAmountValue: '',
        dayAmountValue: '',
        unit: '',
        status: '',
        recordedCost: 0,
        costCurrency: '',
        minPrice: 0,
        type: '',
        simType: '',
        purchaseType: '',
        dataType: '',
        vendorSku: '',
        operator: '',
        dataResetTime: '',
        networkType: '',
        throttle: '',
        countryRegion: '',
        apn: '',
        planType: '',
        hotspot: '',
        carrier: '',
        onsiteCarrier: '',
        vendorId: '',
      };

      const response = await axios.post(
        `${config.gohubBackend.api.baseUrl}/skus`,
        payload,
        {
          headers: {
            'X-Authorization': config.gohubBackend.api
              .authorizationKey as string,
          },
        }
      );

      message.success('Create Sku successfully');

      setCreateSkuModalVisibility(false);

      createSkuForm.resetFields();

      await handleGetSkus();
    } catch (error: any) {
      let errorMessage = error.message;
      if (axios.isAxiosError(error)) {
        const { response } = error;
        if (response) {
          const { data } = response as any;
          const { message: apiErrorMessage } = data;

          errorMessage = apiErrorMessage;
        }
      }

      message.error(`Cause an error when create sku: ${errorMessage}`);
    } finally {
      setLoadingCreateSku(false);
    }
  }, []);

  const createSkuFormInputItems: FormInputItem[] = useMemo(() => {
    return [
      {
        name: 'code',
        label: 'Code',
        render: <Input placeholder="Input Code" />,
        required: true,
      },
      {
        name: 'name',
        label: 'Name',
        render: <Input placeholder="Input Name" />,
        required: true,
      },
    ];
  }, []);

  return (
    <>
      <AppModal
        title="Create Sku"
        open={isCreateSkuModalVisible}
        onCancel={handleCancelCreateSkuModal}
        footer={
          <Space>
            <Button type="default" onClick={handleCancelCreateSkuModal}>
              Cancel
            </Button>
            <Button
              type="primary"
              loading={isLoadingCreateSku}
              onClick={handleCreateSku}
            >
              Confirm
            </Button>
          </Space>
        }
      >
        <FormInput form={createSkuForm} items={createSkuFormInputItems} />
      </AppModal>

      <Modal
        title="Update Sku Information"
        open={isUpdateSkuModalVisible}
        onCancel={handleCancelUpdateSkuModal}
        okText="Confirm"
        cancelText="Cancel"
      >
        <Form form={updateSkuForm}>
          <Form.Item name="simType">
            <Select placeholder="Please select sim type" />
          </Form.Item>
        </Form>
      </Modal>

      <StyledContent direction="vertical" size="middle">
        <Heading3>SKU Management</Heading3>

        <NewSkuFilterComponent />

        <NewSkuTableComponent fetchSkus={handleGetSkus} />
      </StyledContent>
    </>
  );
};

export default NewSkuManagementContainer;

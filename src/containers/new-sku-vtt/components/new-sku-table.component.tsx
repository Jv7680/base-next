import { usePermission } from '@/hooks';
import { Table } from '@/lib';
import { useAppSelector } from '@/redux';
import { SkuStatus, renderSkuStatusTag } from '@/utils';
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from '@ant-design/icons';
import { ProColumnType } from '@ant-design/pro-components';
import { Button, Skeleton, Space, Tag, Tooltip, Typography } from 'antd';
import { ReactNode } from 'react';
import { useNewSkuQueryParams } from '../context';

const { Text, Paragraph } = Typography;

interface NewSkuTableComponentProps {
  fetchSkus: () => Promise<void>;
}

export const NewSkuTableComponent = (
  props: NewSkuTableComponentProps
): ReactNode => {
  const { fetchSkus } = props;
  const { isOnFiltering, listSku, isLoadingGetListSku } = useAppSelector(
    (state) => state.newSkuPage
  );
  const {
    isAdmin,
    isTelecomProductManager,
    isFinanceManager,
    isB2BManager,
    isEcomManager,
  } = usePermission();
  const [queryParams, setQueryParams] = useNewSkuQueryParams();

  const handleChangePagination = async (page: number, pageSize: number) => {
    setQueryParams({
      ...queryParams,
      page,
      pageSize,
    });
  };

  const columns: ProColumnType<any>[] = [
    {
      title: 'Code',
      key: 'code',
      align: 'center',
      width: 250,
      fixed: 'left',
      render: (_, record) => {
        return <Text copyable>{record.code}</Text>;
      },
    },
    {
      title: 'Status',
      key: 'status',
      align: 'center',
      fixed: 'left',
      width: 150,
      render: (_, record: any) => renderSkuStatusTag(record.status),
    },
    {
      title: 'Name',
      key: 'name',
      width: 400,
      render: (_, record) => {
        return <Text copyable>{record.name}</Text>;
      },
    },
    {
      title: 'SIM Type',
      key: 'simType',
      align: 'center',
      width: 150,
      render: (_, record: any) => record.simType,
    },
    {
      title: 'Vendor Name',
      key: 'vendorName',
      align: 'center',
      width: 150,
      render: (_, record: any) => record.vendor.name,
    },
    {
      title: 'Country/Region',
      key: 'countryRegion',
      width: 400,
      render: (_, record: any) => {
        const countryRegion = record.countryRegion.trim();
        return (
          countryRegion.length > 0 && (
            <Space wrap>
              {countryRegion
                .split(',')
                .map((countryRegion: any, index: number) => (
                  <Tag key={index} color="blue">
                    {countryRegion}
                  </Tag>
                ))}
            </Space>
          )
        );
      },
    },
    {
      title: 'Day Amount',
      key: 'dayAmountValue',
      align: 'center',
      width: 150,
      render: (_, record: any) => (
        <Tag color="blue">
          {record.dayAmountValue} day
          {parseInt(record.dayAmountValue) > 1 ? 's' : ''}
        </Tag>
      ),
    },
    {
      title: 'Data Amount',
      key: 'dataAmountValue',
      align: 'center',
      width: 150,
      render: (_, record: any) => (
        <Tag color="blue">{record.dataAmountValue}</Tag>
      ),
    },
    {
      title: 'Data Type',
      key: 'dataType',
      align: 'center',
      width: 150,
      render: (_, record: any) => record.dataType,
    },
    {
      title: 'Operator',
      key: 'operator',
      align: 'center',
      width: 150,
      render: (_, record: any) => record.operator,
    },
    {
      title: 'Purchase Type',
      key: 'purchaseType',
      align: 'center',
      width: 150,
      render: (_, record: any) => record.purchaseType,
    },
    {
      title: 'SKU Type',
      key: 'skuType',
      align: 'center',
      width: 150,
      render: (_, record: any) => record.type,
    },
    {
      title: 'Vendor SKU',
      key: 'vendorSku',
      align: 'center',
      width: 170,
      render: (_, record: any) =>
        record.vendorSku && <Text copyable>{record.vendorSku}</Text>,
    },
    {
      title: 'Plan Type',
      key: 'planType',
      align: 'center',
      width: 150,
      render: (_, record: any) => record.planType,
    },
    {
      title: 'Data Reset Time',
      key: 'dataResetTime',
      align: 'center',
      width: 150,
      render: (_, record: any) => record.dataResetTime,
    },
    {
      title: 'Network Type',
      key: 'networkType',
      align: 'center',
      width: 150,
      render: (_, record: any) => record.networkType,
    },
    {
      title: 'Throttle',
      key: 'throttle',
      align: 'center',
      width: 150,
      render: (_, record: any) => record.throttle,
    },
    {
      title: 'APN',
      key: 'apn',
      align: 'center',
      width: 150,
      render: (_, record: any) => record.apn,
    },
    {
      title: 'Hotspot',
      key: 'hotspot',
      align: 'center',
      width: 150,
      render: (_, record: any) => record.hotspot,
    },
    {
      title: 'Carrier',
      key: 'carrier',
      align: 'center',
      width: 250,
      render: (_, record: any) => record.carrier,
    },
    {
      title: 'Onsite Carrier',
      key: 'onsiteCarrier',
      width: 250,
      render: (_, record: any) => (
        <Paragraph ellipsis={{ rows: 1, expandable: true, symbol: 'More' }}>
          {record.onsiteCarrier}
        </Paragraph>
      ),
    },
    {
      title: 'Note',
      key: 'note',
      width: 250,
      render: (_, record: any) => (
        <Paragraph ellipsis={{ rows: 1, expandable: true, symbol: 'More' }}>
          {record.note}
        </Paragraph>
      ),
    },
    {
      title: 'Recorded Cost',
      key: 'recordedCost',
      align: 'center',
      width: 150,
      hideInTable: !isAdmin && !isTelecomProductManager && !isFinanceManager,
      render: (_, record: any) => record.recordedCost,
    },
    {
      title: 'Cost Currency',
      key: 'costCurrency',
      align: 'center',
      width: 150,
      hideInTable: !isAdmin && !isTelecomProductManager && !isFinanceManager,
      render: (_, record: any) => record.currency.code,
    },
    {
      title: 'Min Price',
      key: 'minPrice',
      align: 'center',
      width: 150,
      hideInTable:
        !isAdmin &&
        !isTelecomProductManager &&
        !isFinanceManager &&
        !isB2BManager &&
        !isEcomManager,
      render: (_, record: any) => record.minPrice,
    },
    {
      title: 'Unit',
      key: 'unit',
      align: 'center',
      width: 150,
      render: (_, record: any) => record.unit,
    },
    {
      title: 'Data Reset Time',
      key: 'dataResetTime',
      align: 'center',
      width: 150,
      render: (_, record: any) => record.dataResetTime,
    },
    {
      title: 'Action',
      key: 'action',
      align: 'center',
      width: 150,
      fixed: 'right',
      onCell: (record, rowIndex) => {
        return {
          onClick: (e) => {
            e.stopPropagation();
            console.log(record, rowIndex);
          },
        };
      },
      render: (_, record: any) => (
        <Space>
          <Tooltip title="Edit">
            <Button
              type="text"
              icon={<EditOutlined />}
              // onClick={() => setUpdateSkuModalVisibility(true)}
            />
          </Tooltip>

          {record.status !== SkuStatus.Deleted && (
            <Tooltip title="Delete">
              <Button
                danger
                type="text"
                icon={<DeleteOutlined />}
                //   onClick={() => handleDeleteSku(record.id)}
              />
            </Tooltip>
          )}
        </Space>
      ),
    },
  ];

  return (
    <>
      {isLoadingGetListSku ? (
        <Skeleton active paragraph={{ rows: 6 }} />
      ) : (
        <Table
          columns={columns}
          dataSource={listSku.data}
          bordered={false}
          loading={isLoadingGetListSku}
          search={false}
          pagination={{
            total: listSku.pagination?.total,
            defaultCurrent: queryParams.page,
            defaultPageSize: queryParams.pageSize,
            onChange: handleChangePagination,
          }}
          scroll={{
            y: `calc(100vh - ${isOnFiltering ? 617 : 390}px`,
          }}
          toolBarRender={() => [
            <Button
              key="reload"
              loading={isLoadingGetListSku}
              onClick={fetchSkus}
              icon={<ReloadOutlined />}
            />,
          ]}
        />
      )}
    </>
  );
};

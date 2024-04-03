import { ProTable, ProTableProps } from '@ant-design/pro-components';
import styled from 'styled-components';

const StyledTable = styled(ProTable)`
  .ant-pro-card .ant-pro-card-body {
    padding-inline: 0;
  }

  .ant-table-tbody .ant-table-row:hover {
    cursor: ${(props) => (props.onRow ? 'pointer' : 'default')};
  }
`;

export const Table = <T extends object, U extends object>(
  props: ProTableProps<T, U>
) => {
  const {
    options,
    pagination,
    scroll,
    bordered,
    size,
    dateFormatter,
    rowKey,
    ...rest
  } = props;

  return (
    <StyledTable
      rowKey={rowKey || 'id'}
      size={size || 'small'}
      bordered={bordered || true}
      options={{
        fullScreen: false,
        reload: false,
        density: false,
        setting: false,
        ...options,
      }}
      pagination={{
        showSizeChanger: true,
        responsive: true,
        showQuickJumper: true,
        size: 'small',
        position: ['bottomRight'],
        showTotal: (total) => `Total ${total} item${total > 1 ? 's' : ''}`,
        ...pagination,
      }}
      scroll={{
        x: 1000,
        y: 'calc(100vh - 336px)',
        scrollToFirstRowOnChange: false,
        ...scroll,
      }}
      dateFormatter={dateFormatter || 'string'}
      {...rest}
    />
  );
};

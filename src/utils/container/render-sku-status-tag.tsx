import { Tag } from 'antd';
import { SkuStatus } from '../enums';

export const renderSkuStatusTag = (status: string) => {
  switch (status) {
    case SkuStatus.Active: {
      return <Tag color="green">{status}</Tag>;
    }
    case SkuStatus.Temporary: {
      return <Tag color="cyan">{status}</Tag>;
    }
    case SkuStatus.Preparing: {
      return <Tag color="gold">{status}</Tag>;
    }
    case SkuStatus.Inactive: {
      return <Tag color="gray">{status}</Tag>;
    }
    case SkuStatus.Deleted:
    default: {
      return <Tag color="red">{status}</Tag>;
    }
  }
};

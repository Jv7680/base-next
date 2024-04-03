import { Tag } from 'antd';
import { ListingStatus } from '../enums/listing-status';

export const renderListingStatusTag = (status: string) => {
  switch (status) {
    case ListingStatus.Active: {
      return <Tag color="green">{status}</Tag>;
    }
    case ListingStatus.Preparing: {
      return <Tag color="gold">{status}</Tag>;
    }
    case ListingStatus.Inactive: {
      return <Tag color="gray">{status}</Tag>;
    }
    case ListingStatus.Temporary: {
      return <Tag color="cyan">{status}</Tag>;
    }
    case ListingStatus.Deleted: {
      return <Tag color="red">{status}</Tag>;
    }
  }
};

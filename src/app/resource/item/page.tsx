'use client';

import dynamic from 'next/dynamic';

const ItemManagement = dynamic(
  () => import('@/container/item/item.container'),
  {
    ssr: false,
  }
);

const BaseLayout = dynamic(() => import('@/components/base-layout/BaseLayout'), {
  ssr: false,
});
export default function ItemManagementPage() {
  return (
    <BaseLayout>
      <ItemManagement />
    </BaseLayout>
  );
}

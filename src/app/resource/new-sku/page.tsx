'use client';

import { NewSkuQueryParamsProvider } from '@/container/new-sku-vtt/context';
import dynamic from 'next/dynamic';

// old import
// const NewSkuManagement = dynamic(() => import("@/container/new-sku/new-sku.container"), {
//   ssr: false
// });

const NewSkuManagement = dynamic(
  () => import('@/container/new-sku-vtt/new-sku.container'),
  {
    ssr: false,
  }
);

const BaseLayout = dynamic(() => import('@/components/base-layout/BaseLayout'), {
  ssr: false,
});
export default function NewProductSkuManagementPage() {
  return (
    <BaseLayout>
      <NewSkuQueryParamsProvider>
        <NewSkuManagement />
      </NewSkuQueryParamsProvider>
    </BaseLayout>
  );
}

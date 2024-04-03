"use client";

import dynamic from "next/dynamic";

const PriceListManagement = dynamic(() => import("@/container/price-list/price-list.container"), {
  ssr: false
});

const BaseLayout = dynamic(() => import("@/components/base-layout/BaseLayout"), {
  ssr: false
});
export default function PriceListManagementPage() {
  return (
    <BaseLayout>
      <PriceListManagement />
    </BaseLayout>
  );
}

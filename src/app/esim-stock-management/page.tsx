"use client";

import dynamic from "next/dynamic";

const EsimStockManagement = dynamic(() => import("@/container/esim-stock-management/esim-stock-management.container"), {
  ssr: false
});

const BaseLayout = dynamic(() => import("@/components/base-layout/BaseLayout"), {
  ssr: false
});
export default function ProductPage() {
  return (
    <BaseLayout>
      <EsimStockManagement />
    </BaseLayout>
  );
}

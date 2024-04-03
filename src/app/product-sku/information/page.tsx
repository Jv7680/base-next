"use client";

import dynamic from "next/dynamic";

const ProductSku = dynamic(() => import("@/container/ProductSKU/ProductSku"), {
  ssr: false
});

const BaseLayout = dynamic(() => import("@/components/base-layout/BaseLayout"), {
  ssr: false
});

export default function Page() {
  return (
    <BaseLayout>
      <ProductSku />
    </BaseLayout>
  );
}

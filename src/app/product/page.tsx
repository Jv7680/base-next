"use client";

import dynamic from "next/dynamic";

const Products = dynamic(() => import("@/container/Product/Products"), {
  ssr: false
});

const BaseLayout = dynamic(() => import("@/components/base-layout/BaseLayout"), {
  ssr: false
});
export default function ProductPage() {
  return (
    <BaseLayout>
      <Products />
    </BaseLayout>
  );
}

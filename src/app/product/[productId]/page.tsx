"use client";

import dynamic from "next/dynamic";

const ProductDetail = dynamic(
  () => import("@/container/Product/ProductDetail/ProductDetail"),
  { ssr: false }
);

const BaseLayout = dynamic(() => import("@/components/base-layout/BaseLayout"), {
  ssr: false
});

export default function ProductDetailPage() {
  return (
    <BaseLayout>
      <ProductDetail />
    </BaseLayout>
  );
}

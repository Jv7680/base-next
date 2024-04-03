"use client";

import dynamic from "next/dynamic";

const Promotions = dynamic(() => import("@/container/Promotion/Promotions"), {
  ssr: false
});

const BaseLayout = dynamic(() => import("@/components/base-layout/BaseLayout"), {
  ssr: false
});
export default function Page() {
  return (
    <BaseLayout>
      <Promotions />
    </BaseLayout>
  );
}

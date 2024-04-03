"use client";

import dynamic from "next/dynamic";

const ValidateProducts = dynamic(
  () => import("@/container/Notifications/ValidateProducts/ValidateProducts"),
  {
    ssr: false
  }
);

const BaseLayout = dynamic(() => import("@/components/base-layout/BaseLayout"), {
  ssr: false
});
export default function Page() {
  return (
    <BaseLayout>
      <ValidateProducts />
    </BaseLayout>
  );
}

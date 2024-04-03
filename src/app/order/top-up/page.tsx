"use client";

import React from "react";

import dynamic from "next/dynamic";

const OrderTable = dynamic(
  () => import("@/container/order/table/OrderTable"),
  { ssr: false }
);

const BaseLayout = dynamic(() => import("@/components/base-layout/BaseLayout"), {
  ssr: false
});


export default function OrderPage() {
  return (
    <BaseLayout>
      <OrderTable />
    </BaseLayout>
  );
};
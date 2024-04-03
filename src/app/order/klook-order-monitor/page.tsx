"use client";

import React from "react";

import dynamic from "next/dynamic";

const KlookOrderMonitorTable = dynamic(
  () => import("@/container/klook-order-monitor/KlookOrderMonitorTable"),
  { ssr: false }
);

const BaseLayout = dynamic(() => import("@/components/base-layout/BaseLayout"), {
  ssr: false
});


export default function KlookOrderMonitorPage() {
  return (
    <BaseLayout>
      <KlookOrderMonitorTable />
    </BaseLayout>
  );
};
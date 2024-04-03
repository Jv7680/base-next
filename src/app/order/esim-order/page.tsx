"use client";

import React from "react";

import dynamic from "next/dynamic";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "@/lib";

const ESIMOrderContainer = dynamic(
  () => import("@/container/esim-order/esim-order.container"),
  { ssr: false }
);

const BaseLayout = dynamic(() => import("@/components/base-layout/BaseLayout"), {
  ssr: false
});


export default function ESIMOrderPage() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BaseLayout>
        <ESIMOrderContainer />
      </BaseLayout>
    </ThemeProvider>
  );
};
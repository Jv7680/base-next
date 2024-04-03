"use client";

import { BaseLayout } from "@/components";
import { Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { push } = useRouter();
  
  useEffect(() => {
    push("/product");
  }, [push]);

  return (
    <BaseLayout>
      <Spin />
    </BaseLayout>
  );
}

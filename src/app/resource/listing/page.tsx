"use client";

import dynamic from "next/dynamic";

const ListingManagement = dynamic(() => import("@/container/listing/listing.container"), {
  ssr: false
});

const BaseLayout = dynamic(() => import("@/components/base-layout/BaseLayout"), {
  ssr: false
});
export default function ListingManagementPage() {
  return (
    <BaseLayout>
      <ListingManagement />
    </BaseLayout>
  );
}
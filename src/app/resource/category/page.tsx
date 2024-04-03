'use client'

import dynamic from 'next/dynamic'

const CategoryManagement = dynamic(
  () => import('@/container/category/category.container'),
  {
    ssr: false,
  }
)

const BaseLayout = dynamic(() => import('@/components/base-layout/BaseLayout'), {
  ssr: false,
})
export default function CategoryManagementPage() {
  return (
    <BaseLayout>
      <CategoryManagement />
    </BaseLayout>
  )
}

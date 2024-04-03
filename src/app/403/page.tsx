"use client";

import { PRODUCT_PATH } from "@/utils/pathRouters";
import { Button, Result } from "antd";
import { useRouter } from "next/navigation";

const PermissionDefine = () => {
  const { push } = useRouter();
  return (
    <Result
      status="403"
      title="403"
      subTitle="Xin lỗi, bạn không được phép truy cập trang này."
      extra={
        <Button type="primary" onClick={() => push(PRODUCT_PATH)}>
          Về trang chủ
        </Button>
      }
    />
  );
};

export default PermissionDefine;

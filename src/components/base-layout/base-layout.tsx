import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  HighlightOutlined,
} from '@ant-design/icons';
import type { ProLayoutProps } from '@ant-design/pro-components';
import { ProLayout } from '@ant-design/pro-components';
import { useEffect, useMemo, useState } from 'react';
import { colors } from '@/utils/colors';
import { Dropdown, FloatButton, Form, Input, Modal, Spin, message } from 'antd';
import styles from './BaseLayout.module.scss';
import { redirect, usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import useAuth from '@/hooks/auth/useAuth';
import { removeAuth } from '@/utils/auth';
import { useUpdatePassword } from '@/hooks/auth/useUpdatePassword';
import { isEmpty } from 'lodash';
import { ApolloError } from '@apollo/client';
import { useNotificationsNewCount } from '../../container/Notifications/ValidateProducts/hooks/usseNotificationCountNew';
import { NOTIFICATION_VALIDATE_PRODUCT } from '@/utils/pathRouters';
import { getMaterialViewByDepartmentAndRole } from '@/utils/permission';

type BaseLayoutProps = {
  children: React.ReactNode;
};

type FieldType = {
  currentPassword: string;
  newPassword: string;
};

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  const [form] = Form.useForm();
  const { push } = useRouter();
  const pathname = usePathname() as string;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  const user = useAuth();
  const { metaData } = user;

  const { updatePassword, loading } = useUpdatePassword();

  const { count: countNoti, refetch } = useNotificationsNewCount();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      await updatePassword(values);
      message.success('Update password successfully');
      setIsModalOpen(false);
    } catch (error: any) {
      if (!isEmpty(error?.errorFields)) {
        return;
      }
      if (error instanceof ApolloError) {
        void message.error(error.message);
      }
    }
  };

  useEffect(() => {
    if (countNoti && user?.router?.includes(NOTIFICATION_VALIDATE_PRODUCT)) {
      setInterval(() => refetch(), 10000);
    }
  }, [refetch, countNoti, user?.router]);

  useEffect(() => {
    const isUserNotEnoughAccessToPage = user?.router?.every(
      (router) => !pathname.includes(router)
    );
    if (isUserNotEnoughAccessToPage) {
      redirect('/403');
    }
  }, [pathname, user?.router]);

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  const props: ProLayoutProps = useMemo(
    () => ({
      ...getMaterialViewByDepartmentAndRole(
        metaData?.department,
        metaData?.role,
        {
          numberOfNotification: countNoti as number,
        }
      ),
      colorPrimary: colors.primary,
      fixSiderbar: true,
      collapsedButtonRender: false,
      menuItemRender: (item, dom) => (
        <a
          onClick={() => {
            push(item.path as string);
          }}
        >
          {dom}
        </a>
      ),
    }),
    [push, countNoti]
  );

  return (
    <>
      <ProLayout
        className={styles.baseLayout}
        {...props}
        layout="mix"
        bgLayoutImgList={[
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            left: 85,
            bottom: 100,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            bottom: -68,
            right: -45,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
            bottom: 0,
            left: 0,
            width: '331px',
          },
        ]}
        collapsed={collapsed}
        token={{
          header: {
            colorBgMenuItemSelected: 'rgba(0,0,0,0.04)',
            colorHeaderTitle: colors.primary,
          },
          pageContainer: {
            paddingBlockPageContainerContent: 0,
            paddingInlinePageContainerContent: 0,
          },
        }}
        activeKey={pathname.split('/')[0]}
        menuFooterRender={(props) => {
          if (props?.collapsed) return undefined;
          return (
            <div
              style={{
                textAlign: 'center',
                paddingBlockStart: 12,
                color: colors.primary,
              }}
            >
              <div>© 2023 Gohub</div>
            </div>
          );
        }}
        onCollapse={setCollapsed}
        logo={<Image src="/image/logo.png" width={24} height={22} alt="logo" />}
        title="Gohub"
        headerContentRender={() => {
          return (
            <div
              onClick={() => setCollapsed(!collapsed)}
              style={{
                cursor: 'pointer',
                fontSize: '16px',
              }}
            >
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </div>
          );
        }}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
          title: user?.metaData?.name ?? '',
          render: (props, dom) => {
            return (
              <Dropdown
                menu={{
                  items: [
                    {
                      key: 'change_password',
                      icon: <HighlightOutlined />,
                      onClick: showModal,
                      label: 'Change Password',
                    },
                    {
                      key: 'logout',
                      icon: <LogoutOutlined />,
                      onClick: () => {
                        removeAuth();
                        push('/login');
                      },
                      label: 'Logout',
                    },
                  ],
                }}
              >
                {dom}
              </Dropdown>
            );
          },
        }}
      >
        <FloatButton.BackTop />
        {children}
        <Modal
          title="Change password"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          okButtonProps={{ loading }}
        >
          <Spin spinning={loading} tip="Loading">
            <Form
              form={form}
              style={{ padding: '12px 0px' }}
              name="changePassword"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Form.Item<FieldType>
                label="Current Password"
                name="currentPassword"
                rules={[
                  {
                    required: true,
                    message: 'Please enter current password!',
                  },
                ]}
              >
                <Input.Password placeholder="Enter current password" />
              </Form.Item>

              <Form.Item<FieldType>
                label="New Password"
                name="newPassword"
                rules={[
                  {
                    required: true,
                    message: 'Please enter new password!',
                  },
                  {
                    max: 32,
                    min: 8,
                    message: 'Password must between 8 to 32 characters',
                  },
                  {
                    pattern:
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    message:
                      'Password must have at least 1 lowercase, 1 number and 1 special character',
                  },
                ]}
              >
                <Input.Password placeholder="Enter new password" />
              </Form.Item>
            </Form>
          </Spin>
        </Modal>
      </ProLayout>
    </>
  );
};

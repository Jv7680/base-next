import { Form, FormRule, Skeleton } from 'antd';
import { ReactNode } from 'react';

export interface FormInputItem {
  name: string;
  isLoading?: boolean;
  label?: string;
  render?: ReactNode;
  rules?: FormRule[];
  required?: boolean;
  isShowing?: boolean;
}

export interface FormInputProps {
  form: any;
  items: FormInputItem[];
  onFormChange?: () => void;
  onClearForm?: () => void;
  initialValues?: any;
}

export const FormInput = (props: FormInputProps): ReactNode => {
  const { form, items, onFormChange, onClearForm, initialValues } = props;

  const renderItems = (): ReactNode => {
    return (
      <>
        {items.map((item: FormInputItem, index: number) => {
          const { isLoading, isShowing = true, render, rules } = item;

          if (isLoading) {
            return <Skeleton.Input key={index} active />;
          }

          return (
            <Form.Item hidden={!isShowing} key={index} rules={rules} {...item}>
              {render}
            </Form.Item>
          );
        })}
      </>
    );
  };

  return (
    <>
      <Form
        form={form}
        onReset={onClearForm}
        onValuesChange={onFormChange}
        layout="vertical"
        initialValues={initialValues}
      >
        {renderItems()}
      </Form>
    </>
  );
};

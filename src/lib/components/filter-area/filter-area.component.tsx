import { Button, Col, Form, Row, Space } from 'antd';
import { ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

interface FilterBlockProps {
  isVisible: boolean;
}
const FilterBlock = styled(Space)<FilterBlockProps>`
  background: #fafafa;

  padding: 24px;
  border-radius: 8px;
  border: 1px solid #eaeff1;
  width: 100%;

  opacity: ${(props) => {
    const { isVisible } = props;

    return isVisible ? '1' : '0';
  }};

  animation: ${({ isVisible }) => (isVisible ? fadeIn : fadeOut)} 0.3s
    ease-in-out;

  display: ${({ isVisible }) => {
    return isVisible ? 'flex' : 'none';
  }};
`;

const FilterFields = styled(Row)`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.strong`
  font-size: 16px;
  font-weight: 600px;
`;

const FilterItem = styled(Form.Item)`
  margin-right: 5px;
  margin-bottom: 5px;

  box-sizing: border-box;

  margin: 0;
`;

const ActionButton = styled(Space)`
  display: flex;
  justify-content: right;
`;

const ClearFilterButton = styled(Button)`
  color: #7ce3fd;

  padding: 4px 16px;

  // TODO: Move to global css
  &:focus {
    outline: 0 !important;
  }
`;

interface FilterSubmitButtonProps {
  isReadyToFilter: boolean;
}
const FilterSubmitButton = styled(Button)<FilterSubmitButtonProps>`
  padding: 4px 16px;
  border-radius: 50px;

  // TODO: Move to global css
  &:focus {
    outline: 0 !important;
  }
`;

export interface FilterItem {
  name: string;
  label: string;
  isShowingOnFilter?: boolean;
  render: ReactNode;
}

export interface FilteringAreaProps {
  form: any;
  layout?: 'vertical' | 'horizontal';
  items: FilterItem[];
  isOnFiltering: boolean;
  isFilterEnabled: boolean;
  onFormChange: () => void;
  onApplyFilter: () => void;
  onResetFilter: () => void;
}

export const FilterArea = (props: FilteringAreaProps): ReactNode => {
  const {
    form,
    isOnFiltering,
    items,
    onFormChange,
    layout = 'vertical',
    onResetFilter,
    isFilterEnabled,
    onApplyFilter,
  } = props;

  const renderItems = (): ReactNode => {
    return (
      <>
        {items.map((item: any, index: number) => {
          if (item.isShowingOnFilter) {
            return (
              <Col key={index} sm={4} md={6}>
                <FilterItem
                  name={item.name}
                  label={<strong>{item.label}</strong>}
                >
                  {item.render}
                </FilterItem>
              </Col>
            );
          }

          return <FilterItem key={index} name={item.name} />;
        })}
      </>
    );
  };

  return (
    <FilterBlock direction="vertical" size="middle" isVisible={isOnFiltering}>
      {/* <FilterTitle>Filter</FilterTitle> */}

      <Form form={form} onValuesChange={onFormChange} layout={layout}>
        <FilterFields gutter={[16, 16]}>{renderItems()}</FilterFields>
      </Form>

      <ActionButton direction="horizontal" size="middle">
        <ClearFilterButton type="link" onClick={onResetFilter}>
          Clear all
        </ClearFilterButton>

        <FilterSubmitButton
          type="primary"
          disabled={!isFilterEnabled}
          onClick={onApplyFilter}
        >
          Apply
        </FilterSubmitButton>
      </ActionButton>
    </FilterBlock>
  );
};

import { Button, ButtonProps } from 'antd';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface FilterButtonProps {
  isOnFiltering?: boolean;
}
const StyledButton = styled(Button)<FilterButtonProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100px;
  padding: 4px 16px;
  border-radius: 50px !important;

  outline: none;

  color: #00ccff;
  border: 1px solid #0cf;
  background: ${(props) => {
    const { isOnFiltering } = props;

    return isOnFiltering ? '#EFFCFF' : 'white';
  }};

  // TODO: Move to global css
  &:focus {
    outline: 0 !important;
  }
`;
export interface FilteringButtonProps extends ButtonProps {
  isOnFiltering?: boolean;
  onFilterClick: () => void;
}

export const FilterButton = (props: FilteringButtonProps): ReactNode => {
  const { onFilterClick } = props;

  return (
    <StyledButton
      {...props}
      size={props.size || 'large'}
      onClick={onFilterClick}
    >
      <span>Filter</span>
      <img src="../../../filter.svg" />
    </StyledButton>
  );
};

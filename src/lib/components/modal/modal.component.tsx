import { Modal as AntdModal, ModalProps as AntdModalProps } from 'antd';
import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledModal = styled(AntdModal)``;

export interface ModalProps extends AntdModalProps {}

export const Modal = (props: ModalProps): ReactNode => {
  const { okText, cancelText, children } = props;

  return (
    <StyledModal
      okText={okText || 'Confirm'}
      cancelText={cancelText || 'Cancel'}
      {...props}
    >
      {children}
    </StyledModal>
  );
};

import { Modal, ModalProps } from 'antd';
import { ReactNode, useCallback, useState } from 'react';
import styled from 'styled-components';

const StyledModal = styled(Modal)``;

export interface AppModalProps extends ModalProps {}

export const AppModal = (props: AppModalProps): ReactNode => {
  const { open, children, onCancel } = props;
  const [isOpening, setOpenStatus] = useState<boolean | undefined>(open);

  const handleCancel = useCallback(
    (e: any) => {
      setOpenStatus(false);

      if (onCancel) {
        onCancel(e);
      }
    },
    [onCancel]
  );

  return (
    <StyledModal open={isOpening} onCancel={handleCancel} {...props}>
      {children}
    </StyledModal>
  );
};

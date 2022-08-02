// DEPENDENCIES
import { useState } from 'react';

// STYLED COMPONENTS
import { CloseBtn, Container } from './styles';

// INTERFACES
import { ToastProps } from './types';

export const Toast = ({ children, type = 'success' }: ToastProps): JSX.Element | null => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  if (!isOpen) {
    return null;
  }

  return (
    <Container type={type}>
      {children}
      <CloseBtn onClick={() => setIsOpen(false)} />
    </Container>
  );
};

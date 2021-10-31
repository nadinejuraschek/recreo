// DEPENDENCIES
import { useEffect, useState } from 'react';

// STYLED COMPONENTS
import { CloseBtn, Container } from './styles/Toast';

// INTERFACES
import { ToastProps } from './types';

const Toast = ({ children, open = false, type = 'success' }: ToastProps): JSX.Element | null => {
  const [isOpen, setIsOpen] = useState<boolean>(open);

  useEffect(() => {
    setIsOpen(open);
    window.setTimeout(() => setIsOpen(false), 10000);
  }, [open]);

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

export default Toast;

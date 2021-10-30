// DEPENDENCIES
import { useEffect, useState } from 'react';

// STYLED COMPONENTS
import { CloseBtn, Container, TimeoutBar } from './styles/Toast';

// INTERFACES
import { ToastProps } from './types';

const Toast = ({ children, open = false, type = 'success' }: ToastProps): JSX.Element | null => {
  const [isOpen, setIsOpen] = useState<boolean>(open);
  const [timeoutProgress, setTimeoutProgress] = useState<number>(100);

  useEffect(() => {
    setIsOpen(open);
    window.setInterval(() => setTimeoutProgress(timeoutProgress - 10), 1000);

    // window.setTimeout(() => setIsOpen(false), 10000);
  }, [open]);

  if (!isOpen) {
    return null;
  }

  return (
    <Container type={type}>
      {children}
      <CloseBtn onClick={() => setIsOpen(false)} />
      <TimeoutBar width={timeoutProgress} />
    </Container>
  );
};

export default Toast;

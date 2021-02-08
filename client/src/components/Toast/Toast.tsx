// STYLED COMPONENTS
import { CloseBtn, Container } from './styles/Toast';

interface ToastProps {
  danger?: boolean;
  success?: boolean;
}

const Toast: React.FC<ToastProps> = ({ children, danger, success }) => {
  return (
    <Container danger={danger} success={success}>
      <CloseBtn />
      {children}
    </Container>
  );
};

export default Toast;

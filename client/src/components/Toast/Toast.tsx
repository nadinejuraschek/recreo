// STYLED COMPONENTS
import { CloseBtn, Container } from './styles/Toast';

interface ToastProps {
  danger?: boolean;
  handleClose: () => void;
  success?: boolean;
}

const Toast: React.FC<ToastProps> = ({ children, danger, handleClose, success }) => {
  return (
    <Container danger={danger} success={success}>
      <CloseBtn onClick={handleClose} />
      {children}
    </Container>
  );
};

export default Toast;

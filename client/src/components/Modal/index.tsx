// COMPONENTS
import ModalHeader from './components/ModalHeader';

// STYLED COMPONENTS
import { Body, Container, Footer, Overlay } from './styles/Modal';

interface ModalProps {
  children: React.ReactNode;
  closeButton?: boolean;
  footer?: React.ReactNode;
  title?: string;
  toggleModal: (open: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ children, closeButton, footer, title, toggleModal }) => {
  return (
    <Overlay>
      <Container>
        {(closeButton || title) && <ModalHeader close={closeButton} title={title} handleClose={toggleModal} />}
        <Body>{children}</Body>
        {footer && <Footer>{footer}</Footer>}
      </Container>
    </Overlay>
  );
};

export default Modal;

// COMPONENTS
import ModalHeader from './components/ModalHeader';

// STYLED COMPONENTS
import { Body, Container, Footer, Overlay } from './styles/Modal';

// INTERFACES
import { ModalProps } from './types';

const Modal = ({ children, closeButton, footer, title, toggleModal }: ModalProps): JSX.Element => {
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

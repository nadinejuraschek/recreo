import { ModalHeader } from './components/ModalHeader';
import { Body, Container, Footer, Overlay } from './styles';
import { ModalProps } from './types';

export const Modal = ({ children, closeButton = true, footer = false, title = undefined, toggleModal }: ModalProps): JSX.Element => (
  <Overlay>
    <Container>
      {(closeButton || title) && <ModalHeader close={closeButton} title={title} handleClose={toggleModal} />}
      <Body>{children}</Body>
      {footer && <Footer>{footer}</Footer>}
    </Container>
  </Overlay>
);

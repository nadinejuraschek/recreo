// STYLED COMPONENTS
import { CloseButton, Header, Title } from '../styles/ModalHeader';

// INTERFACES
import { ModalHeaderProps } from '../types';

const ModalHeader = ({ close, handleClose, title }: ModalHeaderProps): JSX.Element => {
  return (
    <Header>
      <Title>{title}</Title>
      {close && <CloseButton onClick={() => handleClose(false)} />}
    </Header>
  );
};

export default ModalHeader;

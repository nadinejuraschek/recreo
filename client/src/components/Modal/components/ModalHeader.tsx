// STYLED COMPONENTS
import { CloseButton, Header, Title } from '../styles/ModalHeader';

// INTERFACES
import { ModalHeaderProps } from '../types';

export const ModalHeader = ({ close, handleClose, title = undefined }: ModalHeaderProps): JSX.Element => {
  return (
    <Header>
      <Title>{title}</Title>
      {close && <CloseButton onClick={() => handleClose(false)} />}
    </Header>
  );
};

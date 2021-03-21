// STYLED COMPONENTS
import { CloseButton, Header, Title } from '../styles/ModalHeader';

interface ModalHeaderProps {
  close?: boolean;
  handleClose: (open: boolean) => void;
  title?: string;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ close, handleClose, title }) => {
  return (
    <Header>
      <Title>{title}</Title>
      {close && <CloseButton onClick={() => handleClose(false)} />}
    </Header>
  );
};

export default ModalHeader;

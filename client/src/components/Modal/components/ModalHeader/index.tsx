import { Button } from 'components';
import { Header, Title } from './styles';
import { ModalHeaderProps } from './types';
import { ReactComponent as CloseIcon } from 'assets/close.svg';

export const ModalHeader = ({ close, handleClose, title = undefined }: ModalHeaderProps): JSX.Element => (
  <Header>
    <Title>{title}</Title>
    {close && (
      <Button icon onClick={() => handleClose(false)} variant="tertiary">
        <CloseIcon />
      </Button>
    )}
  </Header>
);

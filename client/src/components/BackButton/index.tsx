import { useNavigate } from 'react-router-dom';
import { StyledButton, Icon, Label } from './styles';
import { BackButtonProps } from './types';

export const BackButton = ({ label = false }: BackButtonProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <StyledButton onClick={() => navigate(-1)}>
      <Icon />
      {label && <Label>Go Back</Label>}
    </StyledButton>
  );
};

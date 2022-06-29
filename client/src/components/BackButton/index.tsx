// DEPENDENCIES
import { useNavigate } from 'react-router-dom';

// STYLED COMPONENTS
import { Wrapper, Icon, Label } from './styles';

// INTERFACES
import { BackButtonProps } from './types';

export const BackButton = ({ label = false }: BackButtonProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => navigate(-1)}>
      <Icon />
      {label && <Label>Go Back</Label>}
    </Wrapper>
  );
};

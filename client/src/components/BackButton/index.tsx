// DEPENDENCIES
import { useHistory } from 'react-router-dom';

// STYLED COMPONENTS
import { Wrapper, Icon, Label } from './styles';

// INTERFACES
import { BackButtonProps } from './types';

export const BackButton = ({ label = false }: BackButtonProps): JSX.Element => {
  const history = useHistory();

  return (
    <Wrapper onClick={() => history.goBack()}>
      <Icon />
      {label && <Label>Go Back</Label>}
    </Wrapper>
  );
};

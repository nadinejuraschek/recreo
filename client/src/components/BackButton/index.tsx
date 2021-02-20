// DEPENDENCIES
import { useHistory } from 'react-router-dom';

// STYLED COMPONENTS
import { Wrapper, Icon, Label } from './styles/BackButton';

// interface BackButtonProps {}

const BackButton = () => {
  const history = useHistory();

  return (
    <Wrapper onClick={() => history.goBack()}>
      <Icon />
      <Label>Go Back</Label>
    </Wrapper>
  );
};

export default BackButton;

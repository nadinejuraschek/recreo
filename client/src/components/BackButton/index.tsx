// DEPENDENCIES
import { useHistory } from 'react-router-dom';

// STYLED COMPONENTS
import { Wrapper, Icon, Label } from './styles/BackButton';

interface BackButtonProps {
  label?: boolean;
}

const BackButton: React.FC<BackButtonProps> = ({ label }) => {
  const history = useHistory();

  return (
    <Wrapper onClick={() => history.goBack()}>
      <Icon />
      {label && <Label>Go Back</Label>}
    </Wrapper>
  );
};

export default BackButton;

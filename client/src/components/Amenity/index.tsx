// COMPONENTS
import Tooltip from 'components/Tooltip';

// STYLED COMPONENTS
import { Icon, Container } from './styles/Amenity';

const Amenity = () => {
  return (
    <Tooltip>
      <Container>
        <Icon />
      </Container>
    </Tooltip>
  );
};

export default Amenity;

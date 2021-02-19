// DEPENDENCIES

// STYLED COMPONENTS
import { Amenities, Body, Container, Image, Location, Name, Rating, RatingIcon } from './styles/Card';

// COMPONENTS
import Divider from 'components/Divider';

const Card = () => {
  return (
    <Container>
      <Image
        src="https://images.pexels.com/photos/571249/pexels-photo-571249.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="replace with title"
      />
      <Body>
        <Location>Location</Location>
        <Name>Playground</Name>
        <Divider color="var(--blue__opaque)" />
        <Amenities />
        <Rating>
          <RatingIcon /> Rating
        </Rating>
      </Body>
    </Container>
  );
};

export default Card;

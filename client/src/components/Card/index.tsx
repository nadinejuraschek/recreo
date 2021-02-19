// DEPENDENCIES

// STYLED COMPONENTS
import { Body, Container, Distance, Image, Location, LocationIcon, Name, Rating, RatingIcon } from './styles/Card';

const Card = () => {
  return (
    <Container>
      <Image
        src="https://images.pexels.com/photos/571249/pexels-photo-571249.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="replace with title"
      />
      <Body>
        <Distance>25km</Distance>
        <Name>Playground</Name>
        <Location>
          <LocationIcon /> Location
        </Location>
        <Rating>
          <RatingIcon /> Rating
        </Rating>
      </Body>
    </Container>
  );
};

export default Card;

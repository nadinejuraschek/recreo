// STYLED COMPONENTS
import { Amenities, Body, Container, Image, Location, Name, Rating, RatingIcon } from './styles/Card';

// COMPONENTS
import Divider from 'components/Divider';

// INTERFACES
import { CardProps } from './types';

const Card = ({ id, imageSrc, location, name }: CardProps): JSX.Element => {
  return (
    <Container to={`/playgrounds/${id}`}>
      <Image src={imageSrc} alt={name} />
      <Body>
        <Location>{location}</Location>
        <Name>{name}</Name>
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

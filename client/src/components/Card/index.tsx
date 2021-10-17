// STYLED COMPONENTS
import { Amenities, Body, Container, Image, Location, Name } from './styles/Card';

// COMPONENTS
import Divider from 'components/Divider';
import Rating from 'components/Rating';

// HOOKS
import { usePlayground } from 'hooks/usePlayground';

// INTERFACES
import { CardProps } from './types';

const Card = ({ id, imageSrc = '', location = '', name = '' }: CardProps): JSX.Element => {
  const { rating } = usePlayground(id);

  return (
    <Container to={`/playgrounds/${id}`}>
      <Image src={imageSrc} alt={name} />
      <Body>
        <Location>{location}</Location>
        <Name>{name}</Name>
        <Divider color="var(--blue__opaque)" />
        <Amenities />
        <Rating rating={rating} />
      </Body>
    </Container>
  );
};

export default Card;

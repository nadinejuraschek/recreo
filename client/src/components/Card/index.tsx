import { Body, Container, Headline, Image, Location, Name } from './styles';
import { AmenitiesList } from '../AmenitiesList';
import { Divider } from '../Divider';
import { Rating } from '../Rating';
import { CardProps } from './types';
import playgroundPlaceholder from 'assets/placeholder_playground.png';

export const Card = ({ playground }: CardProps) => {
  if (!playground || !playground?._id) {
    return null;
  }

  return (
    <Container to={`/playgrounds/${playground?._id}`}>
      <Image className="card-image" src={playground?.images[0] ?? playgroundPlaceholder} alt={playground?.title ?? ''} />
      <Body className="card-body">
        <Location className="card-location">{playground?.location}</Location>
        <Headline>
          <Name className="card-name">{playground?.title ?? ''}</Name>
          <Rating rating={playground.rating} withValue />
        </Headline>
        <Divider color="var(--blue__opaque)" />
        <AmenitiesList features={playground?.features} small />
      </Body>
    </Container>
  );
};

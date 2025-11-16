import { Body, Container, Headline, Image, Location, Name } from './styles';
import { AmenitiesList } from '../AmenitiesList';
import { Divider } from '../Divider';
import { Rating } from '../Rating';
import { CardProps } from './types';
import { getSinglePlayground } from 'api';
import { useQuery } from '@tanstack/react-query';

export const Card = ({ id, imageSrc = '', location = '', name = '' }: CardProps): JSX.Element => {
  const { data: playground } = useQuery({
    queryKey: ['playground'],
    queryFn: () => getSinglePlayground(id),
  });

  return (
    <Container to={`/playgrounds/${id}`}>
      <Image className="card-image" src={imageSrc} alt={name} />
      <Body className="card-body">
        <Location className="card-location">{location}</Location>
        <Headline>
          <Name className="card-name">{name}</Name>
          <Rating rating={playground?.rating} withValue />
        </Headline>
        <Divider color="var(--blue__opaque)" />
        <AmenitiesList features={playground?.features || []} small />
      </Body>
    </Container>
  );
};

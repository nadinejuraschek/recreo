import { Map } from 'components';
import { getSinglePlayground } from 'api';
import { Content, Main, MapWrapper } from './styles';
import { MapLayoutProps } from './types';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

export const MapLayout = ({ children }: MapLayoutProps): JSX.Element => {
  const { id: paramId = '' } = useParams<{ id: string }>();

  const { data: playground, isLoading } = useQuery({
    queryKey: ['playground'],
    queryFn: () => getSinglePlayground(paramId),
  });

  const marker = playground?.geometry
    ? {
        latitude: playground.geometry.coordinates[1],
        longitude: playground.geometry.coordinates[0],
        title: playground.title || '',
      }
    : undefined;

  return (
    <Main>
      <Content>{children}</Content>
      <MapWrapper>
        <Map isLoading={isLoading} markers={marker ? [marker] : []} zoom={18} />
      </MapWrapper>
    </Main>
  );
};

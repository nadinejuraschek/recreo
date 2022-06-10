// COMPONENTS
import { Map } from 'components';

// STYLED COMPONENTS
import { Content, Main, MapWrapper } from './styles/MapLayout';

// HOOKS
import { usePlayground } from 'hooks/usePlayground';

// INTERFACES
import { MapLayoutProps } from './types';

export const MapLayout = ({ children }: MapLayoutProps): JSX.Element => {
  const { playground } = usePlayground();

  const marker = {
    latitude: playground?.geometry?.coordinates[0] as number,
    longitude: playground?.geometry?.coordinates[1] as number,
    title: playground?.title || '',
  };

  return (
    <Main>
      <Content>{children}</Content>
      <MapWrapper>
        <Map markers={[marker]} />
      </MapWrapper>
    </Main>
  );
};

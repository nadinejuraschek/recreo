// COMPONENTS
import { Map } from 'components';

// STYLED COMPONENTS
import { Content, Main, MapWrapper } from './styles';

// HOOKS
import { usePlayground } from 'hooks/usePlayground';

// INTERFACES
import { MapLayoutProps } from './types';

export const MapLayout = ({ children }: MapLayoutProps): JSX.Element => {
  const { isLoading, playground } = usePlayground();

  const marker = {
    ...playground?.geometry,
    title: playground?.title || '',
  };

  return (
    <Main>
      <Content>{children}</Content>
      <MapWrapper>
        <Map isLoading={isLoading} markers={[marker]} />
      </MapWrapper>
    </Main>
  );
};

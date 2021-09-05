// STYLED COMPONENTS
import { Content, Main, MapWrapper } from './styles/MapLayout';

// INTERFACES
import { MapLayoutProps } from './types';

const MapLayout = ({ children }: MapLayoutProps): JSX.Element => {
  return (
    <Main>
      <Content>{children}</Content>
      <MapWrapper />
    </Main>
  );
};

export default MapLayout;

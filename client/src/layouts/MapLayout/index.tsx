// STYLED COMPONENTS
import { Content, Main, MapWrapper } from './styles/MapLayout';

// INTERFACES
import { MapLayoutProps } from './types';

export const MapLayout = ({ children }: MapLayoutProps): JSX.Element => (
  <Main>
    <Content>{children}</Content>
    <MapWrapper />
  </Main>
);

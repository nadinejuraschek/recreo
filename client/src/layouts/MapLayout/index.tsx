// STYLED COMPONENTS
import { Content, Main, MapWrapper } from './styles/MapLayout';

interface MapLayoutProps {
  children: any;
}

const MapLayout: React.FC<MapLayoutProps> = ({ children }) => {
  return (
    <Main>
      <Content>{children}</Content>
      <MapWrapper />
    </Main>
  );
};

export default MapLayout;

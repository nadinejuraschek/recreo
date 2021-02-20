// COMPONENTS
import BackButton from 'components/BackButton';

// STYLED COMPONENTS
import { Content, Main, MapWrapper } from './styles/MapLayout';

interface MapLayoutProps {
  children: any;
}

const MapLayout: React.FC<MapLayoutProps> = ({ children }) => {
  return (
    <Main>
      <MapWrapper />
      <Content>
        <BackButton />
        {children}
      </Content>
    </Main>
  );
};

export default MapLayout;

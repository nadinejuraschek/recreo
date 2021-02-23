// STYLED COMPONENTS
import { Content, Header, Section } from './styles/SinglePlayground';

// COMPONENTS
import Comments from './components/Comments';
import Info from './components/Info';
import Preview from './components/Preview';
import Tabs from 'components/Tabs';
import Title from 'components/Title';

// LAYOUT
import MapLayout from 'layouts/MapLayout';

// COMPONENTS

const SinglePlayground = () => {
  return (
    <MapLayout>
      <Content>
        <Header>
          <Title size="small">Playground Name</Title>
          {/* TODO: Favorite, Forward */}
        </Header>
        <Section>
          <Info />
          <Tabs options={[{ label: 'Images' }, { label: 'Reviews' }]} />
        </Section>
        <Preview />
        <Comments />
      </Content>
    </MapLayout>
  );
};

export default SinglePlayground;

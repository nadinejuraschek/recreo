// STYLED COMPONENTS
import { Content, Section, TabContent } from './styles/SinglePlayground';

// COMPONENTS
import Comments from './components/Comments';
import Info from './components/Info';
import Header from './components/Header';
import Preview from './components/Preview';
import Tabs from 'components/Tabs';

// LAYOUT
import MapLayout from 'layouts/MapLayout';

const SinglePlayground = () => {
  return (
    <MapLayout>
      <Content>
        <Header />
        <Section>
          <Info />
          <Tabs
            options={[
              { label: 'Images', name: 'images' },
              { label: 'Reviews', name: 'reviews' },
            ]}
          />
        </Section>
        <TabContent>{/* <Preview />
          <Comments /> */}</TabContent>
      </Content>
    </MapLayout>
  );
};

export default SinglePlayground;

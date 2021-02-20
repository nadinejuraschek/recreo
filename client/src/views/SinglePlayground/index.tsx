// STYLED COMPONENTS
import { Section } from './styles/SinglePlayground';

// COMPONENTS
import Comments from './components/Comments';
import Info from './components/Info';
import Preview from './components/Preview';

// LAYOUT
import MapLayout from 'layouts/MapLayout';

// COMPONENTS

const SinglePlayground = () => {
  return (
    <MapLayout>
      <Section>
        <Comments />
        <Info />
      </Section>
      <Preview />
    </MapLayout>
  );
};

export default SinglePlayground;

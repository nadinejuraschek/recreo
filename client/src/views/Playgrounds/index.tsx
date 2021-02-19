// DEPENDENCIES

// STYLED COMPONENTS
import { Section } from './styles/Playgrounds';

// LAYOUT
import DefaultLayout from 'layouts/DefaultLayout';

// COMPONENTS
import Map from 'components/Map';
import Title from 'components/Title';

const Playgrounds = () => {
  return (
    <DefaultLayout>
      <Map />
      <Section>
        <Title>Playgrounds Near You</Title>
      </Section>
      <Section>
        <Title>All Playgrounds</Title>
      </Section>
    </DefaultLayout>
  );
};

export default Playgrounds;

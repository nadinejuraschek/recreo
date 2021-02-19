// DEPENDENCIES

// STYLED COMPONENTS
import { Grid, Section } from './styles/Playgrounds';

// LAYOUT
import DefaultLayout from 'layouts/DefaultLayout';

// COMPONENTS
import Card from 'components/Card';
import Map from 'components/Map';
import Title from 'components/Title';

const Playgrounds = () => {
  return (
    <DefaultLayout>
      <Map />
      <Section>
        <Title>Playgrounds Near You</Title>
        <Grid>
          <Card />
          <Card />
          <Card />
        </Grid>
      </Section>
      <Section>
        <Title>All Playgrounds</Title>
        <Grid>
          <Card />
        </Grid>
      </Section>
    </DefaultLayout>
  );
};

export default Playgrounds;

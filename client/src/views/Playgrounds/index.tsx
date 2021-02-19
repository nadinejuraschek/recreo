// COMPONENTS
import Button from 'components/Button';

// STYLED COMPONENTS
import { EmptyState, Grid, Section } from './styles/Playgrounds';

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
        <EmptyState>
          <p>We couldn&apos;t find any playgrounds near you.</p>
          <Button link="/playgrounds/new" filled>
            Add a Playground
          </Button>
        </EmptyState>
      </Section>
      <Section>
        <Title>All Playgrounds</Title>
        <Grid>
          <Card />
          <Card />
          <Card />
        </Grid>
      </Section>
    </DefaultLayout>
  );
};

export default Playgrounds;

// COMPONENTS
import Card from 'components/Card';
import Title from 'components/Title';

// STYLED COMPONENTS
import { Grid, Section } from '../styles/Playgrounds';

// INTERFACES
import { PlaygroundsListProps } from '../types';

const PlaygroundsList = ({ playgrounds }: PlaygroundsListProps): JSX.Element => {
  return (
    <Section>
      <Title>All Playgrounds</Title>
      <Grid>
        {playgrounds.map((playground) => {
          const { _id, image, location, title } = playground;
          return <Card id={_id} imageSrc={image} key={_id} location={location} name={title} />;
        })}
      </Grid>
    </Section>
  );
};

export default PlaygroundsList;

// DEPENDENCIES
import { useContext } from 'react';

// COMPONENTS
import Button from 'components/Button';
import Card from 'components/Card';
import Title from 'components/Title';

// STYLED COMPONENTS
import { ButtonWrapper, Grid, Section } from '../styles/Playgrounds';

// CONTEXT
import { UserContext } from 'context/UserContext';

// INTERFACES
import { PlaygroundsListProps } from '../types';

const PlaygroundsList = ({ playgrounds, setOpenAddPlaygroundModal }: PlaygroundsListProps): JSX.Element => {
  const { user } = useContext(UserContext);
  return (
    <>
      <ButtonWrapper>
        {user ? (
          <Button $filled handleClick={() => setOpenAddPlaygroundModal(true)}>
            Add a Playground
          </Button>
        ) : null}
      </ButtonWrapper>
      <Section>
        <Title>All Playgrounds</Title>
        <Grid>
          {playgrounds.map((playground) => {
            const { _id, image, location, title } = playground;
            return <Card id={_id} imageSrc={image} key={_id} location={location} name={title} />;
          })}
        </Grid>
        {/* PAGINATION DISPLAYS HERE */}
      </Section>
    </>
  );
};

export default PlaygroundsList;

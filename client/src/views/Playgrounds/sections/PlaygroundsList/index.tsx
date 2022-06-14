// DEPENDENCIES
import { useContext } from 'react';

// COMPONENTS
import { Button, Card } from 'components';

// STYLED COMPONENTS
import { ButtonWrapper, Grid, Section } from '../../styles/Playgrounds';

// CONTEXT
import { UserContext } from 'context/UserContext';

// INTERFACES
import { PlaygroundsListProps } from '../../types';

export const PlaygroundsList = ({ playgrounds, setOpenAddPlaygroundModal }: PlaygroundsListProps): JSX.Element => {
  const { user } = useContext(UserContext);

  return (
    <>
      <Section>
        <ButtonWrapper>
          {user ? (
            <Button $filled handleClick={() => setOpenAddPlaygroundModal(true)}>
              Add a Playground
            </Button>
          ) : null}
        </ButtonWrapper>
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

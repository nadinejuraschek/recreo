import { useContext } from 'react';
import { Button, Card } from 'components';
import { ButtonWrapper, Grid } from './styles';
import { Section } from '../../styles';
import { UserContext } from 'context/UserContext';
import { PlaygroundsListProps } from './types';

export const PlaygroundsList = ({ playgrounds, setOpenAddPlaygroundModal }: PlaygroundsListProps): JSX.Element => {
  const { user } = useContext(UserContext);

  return (
    <>
      <Section>
        {user && (
          <ButtonWrapper>
            <Button $filled onClick={() => setOpenAddPlaygroundModal(true)}>
              Add a Playground
            </Button>
          </ButtonWrapper>
        )}
        <Grid>
          {playgrounds.map((playground) => (
            <Card key={playground._id} playground={playground} />
          ))}
        </Grid>
        {/* PAGINATION DISPLAYS HERE */}
      </Section>
    </>
  );
};

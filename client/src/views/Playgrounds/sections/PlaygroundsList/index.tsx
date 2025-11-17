import { useContext } from 'react';
import { Button, Card } from 'components';
import { ButtonWrapper, Grid } from './styles';
import { Section } from '../../styles';
import { UserContext } from 'context/UserContext';
import { PlaygroundsListProps } from './types';
import playgroundPlaceholder from 'assets/placeholder_playground.png';

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
          {playgrounds.map((playground) => {
            const { _id, images, location, title } = playground;
            return <Card id={_id} imageSrc={images[0] ?? playgroundPlaceholder} key={_id} location={location} name={title} />;
          })}
        </Grid>
        {/* PAGINATION DISPLAYS HERE */}
      </Section>
    </>
  );
};

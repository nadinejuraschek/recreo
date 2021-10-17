// DEPENDENCIES
import { useState } from 'react';

// STYLED COMPONENTS
import { EmptyState, Grid, Section } from './styles/Playgrounds';

// COMPONENTS
import Button from 'components/Button';
import Card from 'components/Card';
import Form from 'components/Form';
import Map from 'components/Map';
import Modal from 'components/Modal';
import Title from 'components/Title';

// HOOKS
import { usePlaygrounds } from 'hooks/usePlaygrounds';

const Playgrounds = (): JSX.Element => {
  const [openAddPlaygroundModal, setOpenAddPlaygroundModal] = useState<boolean>(false);
  const [showAllPlaygrounds, setShowAllPlaygrounds] = useState<boolean>(false);
  const { isLoading, error, playgrounds } = usePlaygrounds();

  const displayError = error && !showAllPlaygrounds;
  const displayPlaygrounds = !error || showAllPlaygrounds;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Map />
      <Section>Filter</Section>
      {displayError && (
        <Section>
          <Title>Playgrounds Near You</Title>
          <EmptyState>
            <p>We couldn&apos;t find any playgrounds near you.</p>
            <Button filled handleClick={() => setOpenAddPlaygroundModal(true)}>
              Add a Playground
            </Button>
            <Button filled handleClick={() => setShowAllPlaygrounds(true)}>
              Browse All Playgrounds
            </Button>
          </EmptyState>
        </Section>
      )}
      {displayPlaygrounds && (
        <Section>
          <Title>All Playgrounds</Title>
          <Grid>
            {playgrounds.map((playground) => {
              const { _id, image, location, title } = playground;
              return <Card id={_id} imageSrc={image} key={_id} location={location} name={title} />;
            })}
          </Grid>
        </Section>
      )}

      {openAddPlaygroundModal && (
        <Modal
          closeButton
          footer={
            <Button filled small>
              Add Playground
            </Button>
          }
          title="New Playground"
          toggleModal={setOpenAddPlaygroundModal}
        >
          <Form playground initialValues={{}} validationSchema={{}} />
        </Modal>
      )}
    </>
  );
};

export default Playgrounds;

// DEPENDENCIES
import { useState } from 'react';

// STYLED COMPONENTS
import { EmptyState, Grid, Section } from './styles/Playgrounds';

// LAYOUT
import DefaultLayout from 'layouts/DefaultLayout';

// COMPONENTS
import Button from 'components/Button';
import Card from 'components/Card';
import Form from 'components/Form';
import Map from 'components/Map';
import Modal from 'components/Modal';
import Title from 'components/Title';

const Playgrounds = () => {
  const [openAddPlaygroundModal, setOpenAddPlaygroundModal] = useState<boolean>(false);

  return (
    <DefaultLayout>
      <Map />
      <Section>Filter</Section>
      <Section>
        <Title>Playgrounds Near You</Title>
        <EmptyState>
          <p>We couldn&apos;t find any playgrounds near you.</p>
          <Button filled handleClick={() => setOpenAddPlaygroundModal(true)}>
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
          <Card />
        </Grid>
      </Section>

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
    </DefaultLayout>
  );
};

export default Playgrounds;

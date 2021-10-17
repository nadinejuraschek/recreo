// DEPENDENCIES
import { useContext, useState } from 'react';

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

// CONTEXT
import { usePlayground } from 'hooks/usePlayground';

const Playgrounds = (): JSX.Element => {
  const [openAddPlaygroundModal, setOpenAddPlaygroundModal] = useState<boolean>(false);
  const { playgrounds } = usePlayground();

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
          {playgrounds.map((playground) => {
            const { _id, image, location, title } = playground;
            return <Card id={_id} imageSrc={image} key={_id} location={location} name={title} />;
          })}
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

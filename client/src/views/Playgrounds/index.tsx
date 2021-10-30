// DEPENDENCIES
import { useState } from 'react';

// COMPONENTS
import AddPlaygroundForm from './components/AddPlaygroundForm';
import Button from 'components/Button';
import ErrorState from './components/ErrorState';
import LoadingSpinner from 'components/LoadingSpinner';
import Map from 'components/Map';
import Modal from 'components/Modal';
import PlaygroundsList from './components/PlaygroundsList';

// STYLED COMPONENTS
import { Section } from './styles/Playgrounds';

// HOOKS
import { usePlaygrounds } from 'hooks/usePlaygrounds';

const Playgrounds = (): JSX.Element => {
  const [openAddPlaygroundModal, setOpenAddPlaygroundModal] = useState<boolean>(false);
  const [showAllPlaygrounds, setShowAllPlaygrounds] = useState<boolean>(false);
  const { isLoading, error, playgrounds } = usePlaygrounds();

  const displayError = error && !showAllPlaygrounds;
  const displayPlaygrounds = !error || showAllPlaygrounds;

  if (isLoading) {
    return <LoadingSpinner containerHeight="100%" containerWidth="100%" />;
  }

  return (
    <>
      <Map />
      <Section>Filter</Section>
      {displayError && <ErrorState setOpenAddPlaygroundModal={setOpenAddPlaygroundModal} setShowAllPlaygrounds={setShowAllPlaygrounds} />}
      {displayPlaygrounds && <PlaygroundsList playgrounds={playgrounds} />}

      {openAddPlaygroundModal && (
        <Modal
          closeButton
          footer={
            <Button $filled $small>
              Add Playground
            </Button>
          }
          title="New Playground"
          toggleModal={setOpenAddPlaygroundModal}
        >
          <AddPlaygroundForm />
        </Modal>
      )}
    </>
  );
};

export default Playgrounds;

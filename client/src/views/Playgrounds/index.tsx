// DEPENDENCIES
import { useState } from 'react';

// COMPONENTS
import AddPlaygroundForm from './components/AddPlaygroundForm';
import ErrorState from './components/ErrorState';
import LoadingSpinner from 'components/LoadingSpinner';
import Map from 'components/Map';
import PlaygroundsList from './components/PlaygroundsList';

// HOOKS
import { usePlaygrounds } from 'hooks/usePlaygrounds';

const Playgrounds = (): JSX.Element => {
  const [openAddPlaygroundModal, setOpenAddPlaygroundModal] = useState<boolean>(false);
  const [showAllPlaygrounds, setShowAllPlaygrounds] = useState<boolean>(false);
  const { isLoading, error, playgrounds } = usePlaygrounds();

  const noPlaygrounds = playgrounds.length === 0;

  const displayError = (error && !showAllPlaygrounds) || noPlaygrounds;
  const displayPlaygrounds = !displayError || showAllPlaygrounds;

  if (isLoading) {
    return <LoadingSpinner containerHeight="100%" containerWidth="100%" />;
  }

  const renderErrorState = () => {
    if (noPlaygrounds) {
      return <ErrorState setOpenAddPlaygroundModal={setOpenAddPlaygroundModal} />;
    }
    return <ErrorState setOpenAddPlaygroundModal={setOpenAddPlaygroundModal} setShowAllPlaygrounds={setShowAllPlaygrounds} />;
  };

  return (
    <>
      <Map />
      {/* FILTER DISPLAYS HERE <Section></Section> */}
      {displayError && renderErrorState()}
      {displayPlaygrounds && <PlaygroundsList playgrounds={playgrounds} />}

      {openAddPlaygroundModal && <AddPlaygroundForm setOpenAddPlaygroundModal={setOpenAddPlaygroundModal} />}
    </>
  );
};

export default Playgrounds;

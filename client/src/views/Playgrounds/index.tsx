// DEPENDENCIES
import { useContext, useEffect, useState } from 'react';

// STYLED-COMPONENTS
import { StyledMap } from './styles/Map';
import { PlaygroundInfo } from './styles/Playgrounds';

// COMPONENTS
import { AddPlaygroundForm, ErrorState, PlaygroundsList } from './sections';
import { LoadingSpinner, Toast } from 'components';

// CONTEXT
import { PlaygroundContext } from 'context/PlaygroundContext';
import { UserContext } from 'context/UserContext';

export const Playgrounds = (): JSX.Element => {
  const [openAddPlaygroundModal, setOpenAddPlaygroundModal] = useState<boolean>(false);
  const [showAllPlaygrounds, setShowAllPlaygrounds] = useState<boolean>(false);
  const [showPlaygroundSuccess, setShowPlaygroundSuccess] = useState<boolean>(false);
  const [showUserSuccess, setShowUserSuccess] = useState<boolean>(false);

  const { success: userSuccess } = useContext(UserContext);
  const { isLoading, error, playgrounds = [], success: playgroundSuccess } = useContext(PlaygroundContext);

  useEffect(() => {
    userSuccess ? setShowUserSuccess(true) : setShowUserSuccess(false);
    playgroundSuccess ? setShowPlaygroundSuccess(true) : setShowPlaygroundSuccess(false);
  }, [playgroundSuccess, userSuccess]);

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
      <StyledMap isLoading={isLoading} />
      <PlaygroundInfo>
        {/* FILTER DISPLAYS HERE <Section></Section> */}
        {showUserSuccess && <Toast>{userSuccess}</Toast>}
        {showPlaygroundSuccess && <Toast>{playgroundSuccess}</Toast>}
        {displayError && renderErrorState()}
        {displayPlaygrounds && <PlaygroundsList playgrounds={playgrounds} setOpenAddPlaygroundModal={setOpenAddPlaygroundModal} />}
      </PlaygroundInfo>
      {openAddPlaygroundModal && <AddPlaygroundForm setOpenAddPlaygroundModal={setOpenAddPlaygroundModal} />}
    </>
  );
};

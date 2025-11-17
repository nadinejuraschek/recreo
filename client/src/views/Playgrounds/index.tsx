import { useState } from 'react';
import { PlaygroundInfo, StyledMap } from './styles';
import { AddPlaygroundForm, ErrorState, PlaygroundsList } from './sections';
import { LoadingSpinner } from 'components';
import { getPlaygrounds } from 'api';
import { useQuery } from '@tanstack/react-query';

export const Playgrounds = (): JSX.Element => {
  const [openAddPlaygroundModal, setOpenAddPlaygroundModal] = useState<boolean>(false);
  const [showAllPlaygrounds, setShowAllPlaygrounds] = useState<boolean>(false);

  const {
    data: playgrounds,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['playgrounds'],
    queryFn: getPlaygrounds,
  });

  const noPlaygrounds = playgrounds?.length === 0;

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
        {displayError && renderErrorState()}
        {displayPlaygrounds && <PlaygroundsList playgrounds={playgrounds ?? []} setOpenAddPlaygroundModal={setOpenAddPlaygroundModal} />}
      </PlaygroundInfo>
      {openAddPlaygroundModal && <AddPlaygroundForm setOpenAddPlaygroundModal={setOpenAddPlaygroundModal} />}
    </>
  );
};

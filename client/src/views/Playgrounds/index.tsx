import { useState } from 'react';
import { PlaygroundInfo, StyledMap } from './styles';
import { AddPlaygroundForm, ErrorState, PlaygroundsList } from './sections';
import { LoadingSpinner } from 'components';
import { getPlaygrounds } from 'api';
import { useQuery } from '@tanstack/react-query';
import { Playground } from 'types';

export const Playgrounds = (): JSX.Element => {
  const [openAddPlaygroundModal, setOpenAddPlaygroundModal] = useState<boolean>(false);
  const [showAllPlaygrounds, setShowAllPlaygrounds] = useState<boolean>(false);

  const {
    data: playgrounds,
    error,
    // TODO: display error
    // isError,
    isLoading,
  } = useQuery<Playground[], Error>({
    queryKey: ['playgrounds'],
    queryFn: getPlaygrounds,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  const noPlaygrounds = playgrounds?.length === 0;

  const displayError = (error && !showAllPlaygrounds) || noPlaygrounds;
  const displayPlaygrounds = !displayError || showAllPlaygrounds;

  const markers =
    playgrounds?.map((playground) => {
      const [longitude, latitude] = playground.geometry.coordinates;
      return {
        latitude,
        longitude,
        title: playground.title,
      };
    }) || [];

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
      <StyledMap isLoading={isLoading} markers={markers} />
      <PlaygroundInfo>
        {/* FILTER DISPLAYS HERE <Section></Section> */}
        {displayError && renderErrorState()}
        {displayPlaygrounds && <PlaygroundsList playgrounds={playgrounds ?? []} setOpenAddPlaygroundModal={setOpenAddPlaygroundModal} />}
      </PlaygroundInfo>
      {openAddPlaygroundModal && <AddPlaygroundForm setOpenAddPlaygroundModal={setOpenAddPlaygroundModal} />}
    </>
  );
};

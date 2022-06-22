// DEPENDENCIES
import { useContext } from 'react';

// STYLED COMPONENTS
import { Icon } from './styles/Favorite';

// ICONS
import { ReactComponent as HeartIcon } from 'assets/heart.svg';

// CONTEXT
import { PlaygroundContext } from 'context';

// INTERFACES
import { FavoriteButtonProps } from './types';

export const FavoriteButton = ({ isFavorite = false, playgroundId, userId }: FavoriteButtonProps): JSX.Element => {
  const { handleFavorite } = useContext(PlaygroundContext);

  return (
    <Icon isFavorite={isFavorite} onClick={() => handleFavorite?.(playgroundId, userId)}>
      <HeartIcon />
    </Icon>
  );
};

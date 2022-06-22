// DEPENDENCIES
import { useContext } from 'react';

// STYLED COMPONENTS
import { HeaderWrapper, HeaderLeft, HeaderRight, HeaderTitle } from '../../styles/Header';

// COMPONENTS
import { BackButton, FavoriteButton, ShareButton } from 'components';

// CONTEXT
import { UserContext } from 'context';

// INTERFACES
import { HeaderProps } from '../../types';

export const Header = ({ favorites, name = '', playgroundId }: HeaderProps): JSX.Element => {
  const { user } = useContext(UserContext);

  const isFavorite = user ? favorites.includes(user.id) : false;

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <BackButton />
        <HeaderTitle>{name}</HeaderTitle>
      </HeaderLeft>
      <HeaderRight>
        {user && <FavoriteButton isFavorite={isFavorite} playgroundId={playgroundId} userId={user.id} />}
        <ShareButton />
      </HeaderRight>
    </HeaderWrapper>
  );
};

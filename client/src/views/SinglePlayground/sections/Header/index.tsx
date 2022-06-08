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

export const Header = ({ name = '' }: HeaderProps): JSX.Element => {
  const { user } = useContext(UserContext);

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <BackButton />
        <HeaderTitle>{name}</HeaderTitle>
      </HeaderLeft>
      <HeaderRight>
        {user && <FavoriteButton />}
        <ShareButton />
      </HeaderRight>
    </HeaderWrapper>
  );
};

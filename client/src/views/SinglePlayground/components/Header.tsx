// DEPENDENCIES
import { useContext } from 'react';

// STYLED COMPONENTS
import { HeaderWrapper, HeaderLeft, HeaderRight, HeaderTitle } from '../styles/Header';

// COMPONENTS
import BackButton from 'components/BackButton';
import FavoriteButton from 'components/FavoriteButton';
import ShareButton from 'components/ShareButton';

// CONTEXT
import { UserContext } from 'context/UserContext';

// INTERFACES
import { HeaderProps } from '../types';

const Header = ({ name = '' }: HeaderProps): JSX.Element => {
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

export default Header;

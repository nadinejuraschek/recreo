// STYLED COMPONENTS
import { HeaderWrapper, HeaderLeft, HeaderRight, HeaderTitle } from '../styles/Header';

// COMPONENTS
import BackButton from 'components/BackButton';
import FavoriteButton from 'components/FavoriteButton';
import ShareButton from 'components/ShareButton';

// INTERFACES
import { HeaderProps } from '../types';

const Header = ({ name = '' }: HeaderProps): JSX.Element => {
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <BackButton />
        <HeaderTitle>{name}</HeaderTitle>
      </HeaderLeft>
      <HeaderRight>
        <FavoriteButton />
        <ShareButton />
      </HeaderRight>
    </HeaderWrapper>
  );
};

export default Header;

// STYLED COMPONENTS
import { HeaderWrapper, HeaderLeft, HeaderRight, HeaderTitle } from '../styles/Header';

// COMPONENTS
import BackButton from 'components/BackButton';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <BackButton />
        <HeaderTitle>Playground Name</HeaderTitle>
      </HeaderLeft>
      <HeaderRight>Favorite, Forward</HeaderRight>
    </HeaderWrapper>
  );
};

export default Header;

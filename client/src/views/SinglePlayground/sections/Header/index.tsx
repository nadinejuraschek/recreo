import { HeaderWrapper, HeaderLeft, HeaderRight, HeaderTitle } from './styles';
import { BackButton, ShareButton } from 'components';
import { HeaderProps } from './types';

export const Header = ({ name = '' }: HeaderProps): JSX.Element => {
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <BackButton />
        <HeaderTitle>{name}</HeaderTitle>
      </HeaderLeft>
      <HeaderRight>
        <ShareButton />
      </HeaderRight>
    </HeaderWrapper>
  );
};

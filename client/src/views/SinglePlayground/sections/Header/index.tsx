import { HeaderWrapper, HeaderLeft, HeaderRight, HeaderTitle } from './styles';
import { BackButton, ShareButton } from 'components';
import { HeaderProps } from './types';
import { ButtonDelete } from './ButtonDelete';

export const Header = ({ authorId, id, name = '' }: HeaderProps): JSX.Element => {
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <BackButton />
        <HeaderTitle>{name}</HeaderTitle>
      </HeaderLeft>
      <HeaderRight>
        <ButtonDelete authorId={authorId} id={id} />
        <ShareButton />
      </HeaderRight>
    </HeaderWrapper>
  );
};

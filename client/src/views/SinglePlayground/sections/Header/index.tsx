import { HeaderWrapper, HeaderLeft, HeaderRight, HeaderTitle } from './styles';
import { BackButton, ShareButton } from 'components';
import { HeaderProps } from './types';
import { ButtonDelete } from './ButtonDelete';
import { ButtonEdit } from './ButtonEdit';

export const Header = ({ authorId, id, name = '', playground }: HeaderProps): JSX.Element => {
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <BackButton />
        <HeaderTitle>{name}</HeaderTitle>
      </HeaderLeft>
      <HeaderRight>
        <ButtonEdit authorId={authorId} id={id} playground={playground} />
        <ShareButton />
        <ButtonDelete authorId={authorId} id={id} />
      </HeaderRight>
    </HeaderWrapper>
  );
};

import styled from 'styled-components';
import { ReactComponent as ShareIcon } from 'assets/share.svg';

export const Icon = styled(ShareIcon).attrs(() => ({
  className: 'share-icon',
}))`
  color: var(--blue_700);
  cursor: pointer;

  height: 2.5rem;
  width: 2.5rem;
`;

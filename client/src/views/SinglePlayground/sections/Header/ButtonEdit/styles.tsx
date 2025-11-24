import styled from 'styled-components';
import { ReactComponent as EditIcon } from 'assets/edit.svg';

export const Icon = styled(EditIcon).attrs(() => ({
  className: 'edit-icon',
}))`
  color: var(--blue_700);
  cursor: pointer;

  height: 2.5rem;
  width: 2.5rem;
`;

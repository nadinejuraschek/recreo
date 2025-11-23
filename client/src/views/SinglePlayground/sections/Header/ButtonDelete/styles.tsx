import styled from 'styled-components';
import { ReactComponent as DeleteIcon } from 'assets/trash.svg';

export const Icon = styled(DeleteIcon).attrs(() => ({
  className: 'delete-button',
}))`
  color: var(--blue_700);
  cursor: pointer;

  height: 2.5rem;
  width: 2.5rem;
`;

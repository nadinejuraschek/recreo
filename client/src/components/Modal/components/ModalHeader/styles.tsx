import styled from 'styled-components';
import { ReactComponent as CloseIcon } from 'assets/close.svg';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 6rem;

  color: var(--blue_700);
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

export const CloseButton = styled(CloseIcon)`
  cursor: pointer;
`;

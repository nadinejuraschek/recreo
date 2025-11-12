import styled from 'styled-components';
import { ReactComponent as ArrowLeft } from 'assets/arrow-left.svg';

export const StyledButton = styled.button<{
  children: React.ReactNode;
  onClick: () => void;
}>`
  display: flex;
  align-items: center;

  border: none;
  background-color: transparent;
  color: var(--blue__dark);

  height: 2rem;

  &:hover {
    color: var(--orange);
    cursor: pointer;
  }
`;

export const Icon = styled(ArrowLeft)`
  height: 2rem;
  width: 2rem;

  &:hover {
    cursor: pointer;
  }
`;

export const Label = styled.label`
  font-size: 1.6rem;
  font-weight: 600;
  margin-left: 1.25rem;

  &:hover {
    cursor: pointer;
  }
`;

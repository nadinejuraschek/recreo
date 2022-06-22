// DEPENDENCIES
import styled, { css } from 'styled-components';

interface HeartProps {
  readonly isFavorite: boolean;
}

export const Icon = styled.div.attrs(() => ({
  className: 'favorite-icon',
}))<HeartProps>`
  color: var(--blue__dark);
  cursor: pointer;

  height: 2.5rem;
  width: 2.5rem;

  svg {
    ${({ isFavorite }) =>
      isFavorite &&
      css`
        fill: var(--blue__dark);
      `}
  }
`;

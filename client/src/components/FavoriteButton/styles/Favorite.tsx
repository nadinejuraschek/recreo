// DEPENDENCIES
import styled, { css } from 'styled-components';

// ICONS
import { ReactComponent as HeartIcon } from 'assets/heart.svg';

interface HeartProps {
  active: boolean;
}

export const Icon = styled(HeartIcon).attrs(() => ({
  className: 'favorite-icon',
}))<HeartProps>`
  color: var(--blue__dark);
  cursor: pointer;

  height: 2.5rem;
  width: 2.5rem;

  ${({ active }) =>
    active &&
    css`
      fill: var(--blue__dark);
    `}
`;

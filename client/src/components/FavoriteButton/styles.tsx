import styled, { css } from 'styled-components';
import { ReactComponent as HeartIcon } from 'assets/heart.svg';
import { HeartProps } from './types';

export const Icon = styled(HeartIcon).attrs(() => ({
  className: 'favorite-icon',
}))<HeartProps>`
  color: var(--blue_700);
  cursor: pointer;

  height: 2.5rem;
  width: 2.5rem;

  ${({ active }) =>
    active &&
    css`
      fill: var(--blue_700);
    `}
`;

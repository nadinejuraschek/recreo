// DEPENDENCIES
import styled, { css } from 'styled-components';

// ICONS
import { ReactComponent as CloseSvg } from 'assets/close.svg';

// INTERFACES
import { ContainerProps } from '../types';

export const Container = styled.div.attrs(() => ({
  className: 'toast-container',
}))<ContainerProps>`
  border: 1px solid;
  border-radius: 0.5rem;
  box-shadow: 0 3px 8px var(--shadow__sm);
  color: var(--blue__dark);
  font-size: 1.4rem;
  margin: 1rem;
  padding: 1rem;

  height: 6rem;
  width: calc(100% - 2rem);
  z-index: 100;

  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  top: 8rem;
  left: 0;

  ${({ type }) =>
    type === 'danger'
      ? css`
          background-color: var(--danger__light);
          border-color: var(--danger);
          color: var(--danger);

          .toast-close-button {
            stroke: var(--danger);
          }

          .toast-timeout-bar {
            background-color: var(--danger);
          }
        `
      : css`
          background-color: var(--success__light);
          border-color: var(--success);
          color: var(--success);

          .toast-close-button {
            stroke: var(--success);
          }

          .toast-timeout-bar {
            background-color: var(--success);
          }
        `};

  @media screen and (min-width: 900px) {
    top: 6rem;
  }
`;

export const CloseBtn = styled(CloseSvg).attrs(() => ({
  className: 'toast-close-button',
}))`
  stroke: var(--blue__dark);

  &:hover {
    cursor: pointer;
  }
`;

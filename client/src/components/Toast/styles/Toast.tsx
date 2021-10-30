// DEPENDENCIES
import styled, { css } from 'styled-components';

// ICONS
import { ReactComponent as CloseSvg } from 'assets/close.svg';

// INTERFACES
import { ContainerProps, TimeoutBarProps } from '../types';

export const Container = styled.div.attrs(() => ({
  className: 'toast-container',
}))<ContainerProps>`
  border: 1px solid;
  border-radius: 0.5rem;
  box-shadow: 0 3px 8px var(--shadow__sm);
  color: var(--blue__dark);
  font-size: 1.4rem;
  margin: 10px;
  padding: 1rem;

  height: 6rem;
  width: auto;
  z-index: 100;

  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  top: 0;
  right: 0;

  ${({ type }) =>
    type === 'danger'
      ? css`
          background-color: #ffe4e4;
          border-color: #b12c1c;
          color: #b12c1c;

          .toast-close-button {
            stroke: #b12c1c;
          }

          .toast-timeout-bar {
            background-color: #b12c1c;
          }
        `
      : css`
          background-color: #d7e7df;
          border-color: #4b7053;
          color: #4b7053;

          .toast-close-button {
            stroke: #4b7053;
          }

          .toast-timeout-bar {
            background-color: #4b7053;
          }
        `};

  @media screen and (min-width: 900px) {
    margin-bottom: 40px;
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

export const TimeoutBar = styled.div.attrs(() => ({
  className: 'toast-timeout-bar',
}))<TimeoutBarProps>`
  position: absolute;
  bottom: 0;
  left: 0;

  height: 0.3rem;
  width: ${({ width }) => (width ? `${width}%` : 0)};
`;

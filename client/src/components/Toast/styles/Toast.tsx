// DEPENDENCIES
import styled, { css } from 'styled-components';

// ICONS
import { ReactComponent as CloseSvg } from 'assets/close.svg';

type ToastProps = {
  danger?: boolean;
  success?: boolean;
};

export const Container = styled.div.attrs(() => ({
  className: 'toast-container',
}))<ToastProps>`
  border: 1px solid;
  border-radius: 0.5rem;
  color: var(--blue__dark);
  font-size: 1rem;
  margin: 0 auto 24px;
  padding: 1rem;

  height: 6rem;
  width: 80%;

  position: relative;

  ${({ danger }) =>
    danger &&
    css`
      background-color: var(--red__light);
      border-color: var(--red);
    `}

  ${({ success }) =>
    success &&
    css`
      background-color: var(--green__light);
      border-color: var(--green);
    `}

  @media screen and (min-width: 900px) {
    margin-bottom: 40px;
  }
`;

export const CloseBtn = styled(CloseSvg).attrs(() => ({
  className: 'toast-close-button',
}))`
  stroke: var(--blue__dark);

  position: absolute;
  top: 0.5rem;
  right: 0.5rem;

  &:hover {
    cursor: pointer;
  }
`;

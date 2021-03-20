// DEPENDENCIES
import styled, { css } from 'styled-components';

type TabProps = {
  isActive: boolean;
};

export const Container = styled.div.attrs(() => ({
  className: 'tabs-container',
}))`
  display: flex;
  align-items: center;

  border-bottom: 2px solid var(--blue__opaque);
  height: 5rem;
  width: 24rem;
`;

export const Tab = styled.button.attrs(() => ({
  className: 'tabs-button',
}))<TabProps>`
  background-color: var(--yellow);
  height: 5rem;
  width: 12rem;

  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 0.4;
    `}
`;

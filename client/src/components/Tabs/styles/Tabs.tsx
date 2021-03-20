// DEPENDENCIES
import styled, { css } from 'styled-components';

interface TabProps {
  isActive?: boolean;
}

export const Container = styled.div.attrs(() => ({
  className: 'tabs-container',
}))`
  display: flex;
  align-items: center;

  height: 5rem;
`;

export const Tab = styled.button.attrs(() => ({
  className: 'tabs-button',
}))<TabProps>`
  background-color: transparent;
  border: none;
  border-bottom: 2px solid var(--blue__opaque);
  font-size: 1.6rem;

  height: 5rem;
  width: 12rem;

  ${({ isActive }) =>
    isActive &&
    css`
      border-bottom: 3px solid var(--orange);
      color: var(--orange);
      font-weight: bold;
    `}
`;

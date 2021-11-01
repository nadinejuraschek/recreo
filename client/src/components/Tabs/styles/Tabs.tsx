// DEPENDENCIES
import styled, { css } from 'styled-components';

interface TabProps {
  isActive?: boolean;
  tabNum: number;
}

export const Container = styled.div.attrs(() => ({
  className: 'tabs-container',
}))`
  display: flex;
  align-items: center;

  height: 5rem;
  width: 100%;
`;

export const Tab = styled.button.attrs(() => ({
  className: 'tabs-button',
}))<TabProps>`
  background-color: transparent;
  border: none;
  border-bottom: 4px solid var(--blue__opaque);
  font-size: 1.6rem;

  height: 5rem;
  width: ${({ tabNum }) => tabNum && `calc(100% / ${tabNum})`};

  ${({ isActive }) =>
    isActive &&
    css`
      border-bottom: 4px solid var(--orange);
      color: var(--orange);
      font-weight: bold;
    `}
`;

// DEPENDENCIES
import styled, { css } from 'styled-components';

// INTERFACES
import { StyledTabProps } from './types';

export const Container = styled.div.attrs(() => ({
  className: 'tabs-container',
}))`
  display: flex;
  align-items: center;

  border-radius: 0.8rem 0.8rem 0 0;
  overflow: hidden;

  height: 5rem;
  width: 100%;
`;

export const Tab = styled.button.attrs(() => ({
  className: 'tabs-button',
}))<StyledTabProps>`
  background-color: var(--white__off);
  border: none;
  border-bottom: 4px solid var(--blue__opaque);
  font-size: 1.6rem;

  height: 5rem;
  width: ${({ tabNum }) => tabNum && `calc(100% / ${tabNum})`};

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: var(--orange__opaque);
      border-bottom: 4px solid var(--orange);
      font-weight: bold;
    `}

  &:focus {
    outline: none;
  }
`;

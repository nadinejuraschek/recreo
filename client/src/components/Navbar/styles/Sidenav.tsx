// DEPENDENCIES
import styled from 'styled-components';

// COMPONENTS
import { NavLink } from 'react-router-dom';

export const Container = styled.div.attrs(() => ({
  className: 'sidenav-container',
}))`
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;

  z-index: 10;

  background-color: var(--white);
  box-shadow: 0 3px 9px var(--shadow__lg);
`;

export const NavItem = styled(NavLink).attrs(() => ({
  className: 'sidenav-item',
}))`
  border-bottom: 1px solid var(--shadow__lg);
  box-shadow: 0 2px 6px var(--shadow__sm);
  color: var(--blue__dark);
  height: 80px;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0 24px;
  text-decoration: none;

  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  &.active {
    background-color: var(--orange__light);
    color: var(--blue__dark);
  }
`;

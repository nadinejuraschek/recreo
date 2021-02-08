// DEPENDENCIES
import styled from 'styled-components';

// COMPONENTS
import { NavLink } from 'react-router-dom';

export const Container = styled.nav.attrs(() => ({
  className: 'nav-container',
}))`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--white);
  padding: 0 24px;

  height: 80px;
  width: 100%;
  z-index: 1;

  @media screen and (min-width: 900px) {
    padding: 0 40px;
  }
`;

export const NavList = styled.div.attrs(() => ({
  className: 'nav-list',
}))`
  display: flex;
  align-items: center;
`;

export const NavItem = styled.div.attrs(() => ({
  className: 'nav-item',
}))`
  font-size: 1rem;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
  className: 'nav-link',
}))`
  color: var(--blue__dark);
  font-weight: 600;

  &:hover {
    color: var(--yellow);
  }
`;

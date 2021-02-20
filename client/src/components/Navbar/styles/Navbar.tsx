// DEPENDENCIES
import styled from 'styled-components';

// COMPONENTS
import { NavLink } from 'react-router-dom';

// ICONS
import { ReactComponent as MenuIcon } from 'assets/menu.svg';

export const Container = styled.nav.attrs(() => ({
  className: 'nav-container',
}))`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--white);
  padding: 0 2.4rem;

  height: 8rem;
  width: 100%;
  z-index: 1;

  @media screen and (min-width: 900px) {
    height: 6rem;
    padding: 0 4rem;
  }
`;

export const NavList = styled.div.attrs(() => ({
  className: 'nav-list',
}))`
  display: none;

  @media screen and (min-width: 900px) {
    display: flex;
    align-items: center;
  }
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
  className: 'nav-link',
}))`
  color: var(--blue__dark);
  font-size: 1.6rem;
  font-weight: 600;
  padding: 0 1.5rem;

  &:hover {
    color: var(--yellow);
  }

  &.active {
    color: var(--yellow);
  }

  @media only screen and (min-width: 900px) {
    font-size: 1.8rem;
  }
`;

export const MenuBtn = styled(MenuIcon).attrs(() => ({
  className: 'nav-menu-button',
}))`
  height: 5rem;
  width: 5rem;

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 900px) {
    display: none;
  }
`;

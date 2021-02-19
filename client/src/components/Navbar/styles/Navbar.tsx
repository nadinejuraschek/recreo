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
  height: 50px;
  width: 50px;

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 900px) {
    display: none;
  }
`;

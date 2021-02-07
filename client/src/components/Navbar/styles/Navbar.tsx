// DEPENDENCIES
import styled from 'styled-components';

// COMPONENTS
// import { NavLink } from 'react-router-dom';

export const Container = styled.nav.attrs(() => ({
  className: 'nav-container',
}))`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 24px;

  height: 80px;
  width: 100vw;
  z-index: 1;
`;

export const NavItem = styled.div.attrs(() => ({
  className: 'nav-item',
}))``;

export const StyledNavLink = styled.a.attrs(() => ({
  className: 'nav-link',
}))``;

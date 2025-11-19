import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as MenuIcon } from 'assets/menu.svg';

export const Container = styled.nav`
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

export const NavList = styled.div`
  display: none;

  @media screen and (min-width: 900px) {
    display: flex;
    align-items: center;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: var(--blue_700);
  font-size: 1.6rem;
  font-weight: 600;
  padding: 0 1.5rem;
  text-decoration: none;

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

export const MenuBtn = styled(MenuIcon)`
  height: 5rem;
  width: 5rem;

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 900px) {
    display: none;
  }
`;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;

  height: calc(100vh - 80px);
  z-index: 10;

  background-color: var(--blue__overlay);
  box-shadow: 0 3px 9px var(--shadow__lg);
`;

export const NavList = styled.ul`
  padding: 0;
  width: 100vw;
`;

export const NavItem = styled(NavLink)`
  background-color: var(--white);
  border-bottom: 1px solid var(--shadow__lg);
  box-shadow: 0 2px 6px var(--shadow__sm);
  color: var(--blue_700);
  height: 80px;
  font-size: 2rem;
  font-weight: bold;
  padding: 0 24px;
  text-decoration: none;

  display: flex;
  align-items: center;

  &:last-child {
    box-shadow: 4px 6px 8px var(--shadow__lg);
  }

  &:hover {
    color: var(--blue_700);
    cursor: pointer;
  }

  &.active {
    // background-color: var(--orange_400);
    // color: var(--blue_700);
    background-color: var(--yellow);
    color: var(--blue_700);
  }
`;

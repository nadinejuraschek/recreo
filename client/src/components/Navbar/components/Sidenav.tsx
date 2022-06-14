// REACT
import { useContext } from 'react';

// STYLED COMPONENTS
import { Container, NavList, NavItem } from '../styles/Sidenav';
import { Footer } from '../../Footer';

// CONTEXT
import { UserContext } from 'context/UserContext';

// INTERFACES
import { SidenavProps } from '../types';

export const Sidenav = ({ handleClose }: SidenavProps): JSX.Element => {
  const { logoutUser, user } = useContext(UserContext);

  const handleLogout = (): void => {
    if (logoutUser) logoutUser();
    handleClose();
  };

  return (
    <Container>
      <NavList>
        {!user && (
          <>
            <NavItem to="/login" onClick={handleClose}>
              Login
            </NavItem>
            <NavItem to="/register" onClick={handleClose}>
              Register
            </NavItem>
          </>
        )}
        <NavItem to="/playgrounds" onClick={handleClose}>
          Playgrounds
        </NavItem>
        {user && (
          <NavItem onClick={handleLogout} to="/logout">
            Logout
          </NavItem>
        )}
      </NavList>

      <Footer navFooter />
    </Container>
  );
};

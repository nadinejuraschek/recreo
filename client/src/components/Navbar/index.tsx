// REACT
import { useContext, useState } from 'react';

// CONTEXT
import { UserContext } from 'context/UserContext';

// STYLED COMPONENTS
import { Logo } from './styles/Logo';
import { Container, NavList, StyledNavLink, MenuBtn } from './styles/Navbar';
import { Sidenav } from './components/Sidenav';

export const Navbar = (): JSX.Element => {
  const [openSidenav, setOpenSidenav] = useState(false);

  const { logoutUser, user } = useContext(UserContext);

  const handleLogout = (): void => {
    if (logoutUser) logoutUser();
  };

  return (
    <Container>
      <Logo>recreo</Logo>
      <NavList>
        {!user && <StyledNavLink to="/login">Login</StyledNavLink>}
        <StyledNavLink to="/playgrounds">Playgrounds</StyledNavLink>
        {user && (
          <StyledNavLink onClick={handleLogout} to="/logout">
            Logout
          </StyledNavLink>
        )}
      </NavList>

      <MenuBtn onClick={() => setOpenSidenav(!openSidenav)} />
      {openSidenav && <Sidenav handleClose={() => setOpenSidenav(false)} />}
    </Container>
  );
};

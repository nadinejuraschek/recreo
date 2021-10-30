// REACT
import { useContext, useState } from 'react';

// CONTEXT
import { UserContext } from 'context/UserContext';

// STYLED COMPONENTS
import { Logo } from './styles/Logo';
import { Container, NavList, StyledNavLink, MenuBtn } from './styles/Navbar';
import Sidenav from './components/Sidenav';

const Navbar = (): JSX.Element => {
  const [openSidenav, setOpenSidenav] = useState(false);

  const { logoutUser } = useContext(UserContext);

  const handleLogout = (): void => {
    if (logoutUser) logoutUser();
  };

  return (
    <Container>
      <Logo>recreo</Logo>
      <NavList>
        <StyledNavLink to="/login">Login</StyledNavLink>
        <StyledNavLink to="/register">Register</StyledNavLink>

        <button onClick={() => handleLogout()}>Logout</button>

        <StyledNavLink to="/playgrounds">Playgrounds</StyledNavLink>
      </NavList>

      <MenuBtn onClick={() => setOpenSidenav(!openSidenav)} />
      {openSidenav && <Sidenav handleClose={() => setOpenSidenav(false)} />}
    </Container>
  );
};

export default Navbar;

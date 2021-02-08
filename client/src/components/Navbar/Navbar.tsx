// STYLED COMPONENTS
import { Logo } from './styles/Logo';
import { Container, NavList, NavItem, StyledNavLink } from './styles/Navbar';

const Navbar = () => {
  return (
    <Container>
      <Logo>recreo</Logo>
      <NavList>
        <NavItem>
          <StyledNavLink to="/login">Login</StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/register">Register</StyledNavLink>
        </NavItem>
      </NavList>
    </Container>
  );
};

export default Navbar;

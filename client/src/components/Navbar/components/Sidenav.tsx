// STYLED COMPONENTS
import { Container, NavItem } from '../styles/Sidenav';

const Sidenav = () => {
  return (
    <Container>
      <NavItem to="/login">Login</NavItem>
      <NavItem to="/register">Register</NavItem>
    </Container>
  );
};

export default Sidenav;

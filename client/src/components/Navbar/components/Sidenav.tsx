// STYLED COMPONENTS
import { Container, NavItem } from '../styles/Sidenav';

const Sidenav = () => {
  return (
    <Container>
      <NavItem to="/login">Login</NavItem>
      <NavItem to="/register">Register</NavItem>

      <NavItem to="/logout">Logout</NavItem>

      <NavItem to="/playgrounds">Playgrounds</NavItem>
      <NavItem to="/playgrounds/new">New Playground</NavItem>
    </Container>
  );
};

export default Sidenav;

// STYLED COMPONENTS
import { Container, NavList, NavItem } from '../styles/Sidenav';
import Footer from 'components/Footer';

const Sidenav = () => {
  return (
    <Container>
      <NavList>
        <NavItem to="/login">Login</NavItem>
        <NavItem to="/register">Register</NavItem>

        <NavItem to="/logout">Logout</NavItem>

        <NavItem to="/playgrounds">Playgrounds</NavItem>
        <NavItem to="/playgrounds/new">New Playground</NavItem>
      </NavList>

      <Footer navFooter />
    </Container>
  );
};

export default Sidenav;

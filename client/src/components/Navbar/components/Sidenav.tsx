// STYLED COMPONENTS
import { Container, NavList, NavItem } from '../styles/Sidenav';
import Footer from 'components/Footer';

// INTERFACES
import { SidenavProps } from '../types';

const Sidenav = ({ handleClose }: SidenavProps): JSX.Element => {
  return (
    <Container>
      <NavList>
        <NavItem to="/login" onClick={handleClose}>
          Login
        </NavItem>
        <NavItem to="/register" onClick={handleClose}>
          Register
        </NavItem>

        <NavItem to="/logout" onClick={handleClose}>
          Logout
        </NavItem>

        <NavItem to="/playgrounds" onClick={handleClose}>
          Playgrounds
        </NavItem>
      </NavList>

      <Footer navFooter />
    </Container>
  );
};

export default Sidenav;

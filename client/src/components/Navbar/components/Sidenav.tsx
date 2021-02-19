// STYLED COMPONENTS
import { Container, NavList, NavItem } from '../styles/Sidenav';
import Footer from 'components/Footer';

interface SidenavProps {
  handleClose: () => void;
}

const Sidenav: React.FC<SidenavProps> = ({ handleClose }) => {
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
        <NavItem to="/playgrounds/new" onClick={handleClose}>
          New Playground
        </NavItem>
      </NavList>

      <Footer navFooter />
    </Container>
  );
};

export default Sidenav;

// STYLED COMPONENTS
import {
  Container,
  NavItem,
  StyledNavLink,
} from '../styles/Sidenav';

interface SidenavProps {}

const Sidenav: React.FC<SidenavProps> = () => {
  return (
    <Container>
      <NavItem>
        <StyledNavLink></StyledNavLink>
      </NavItem>
    </Container>
  );
}

export default Sidenav;
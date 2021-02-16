// STYLED COMPONENTS
import { Container, Link } from './styles/Footer';

const Footer = () => {
  return (
    <Container>
      <Link>
        © {new Date().getFullYear()}{' '}
        <a href="https://github.com/nadinejuraschek" rel="noreferrer" target="_blank">
          Nadine Juraschek
        </a>
      </Link>
    </Container>
  );
};

export default Footer;

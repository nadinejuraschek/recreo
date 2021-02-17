// STYLED COMPONENTS
import { Container, Link } from './styles/Footer';

interface FooterProps {
  navFooter?: boolean;
}

const Footer: React.FC<FooterProps> = ({ navFooter }) => {
  return (
    <Container navFooter={navFooter}>
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

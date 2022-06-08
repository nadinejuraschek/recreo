// STYLED COMPONENTS
import { Container, Link } from './styles/Footer';

// INTERFACES
import { FooterProps } from './types';

export const Footer = ({ navFooter = false }: FooterProps): JSX.Element => {
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

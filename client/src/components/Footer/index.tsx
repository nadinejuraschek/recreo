import { Container, Link } from './styles';
import { FooterProps } from './types';

export const Footer = ({ navFooter = false }: FooterProps): JSX.Element => (
  <Container navFooter={navFooter}>
    <Link>
      © {new Date().getFullYear()}{' '}
      <a href="https://github.com/nadinejuraschek" rel="noreferrer" target="_blank">
        Nadine Pesso
      </a>
    </Link>
  </Container>
);

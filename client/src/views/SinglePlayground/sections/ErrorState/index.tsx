// COMPONENTS
import { Button } from 'components';

// STYLED COMPONENTS
import { Container } from './styles';

export const ErrorState = (): JSX.Element => (
  <Container>
    <p>There was a problem loading this playground. Please try again later.</p>
    <Button link="/playgrounds">Go Back</Button>
  </Container>
);

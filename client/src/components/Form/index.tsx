import { Container } from './styles';
import { FormProps } from './types';

export const Form = ({ alignLeft = false, children, handleSubmit }: FormProps): JSX.Element => (
  <Container alignLeft={alignLeft} onSubmit={handleSubmit}>
    {children}
  </Container>
);

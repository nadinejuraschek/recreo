// STYLED COMPONENTS
import { Container } from './styles/Form';

// INTERFACE
import { FormProps } from './types';

export const Form = ({ alignLeft = false, children, handleSubmit }: FormProps): JSX.Element => {
  return (
    <Container alignLeft={alignLeft} onSubmit={handleSubmit}>
      {children}
    </Container>
  );
};

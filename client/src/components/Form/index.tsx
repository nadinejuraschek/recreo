// STYLED COMPONENTS
import { Container } from './styles/Form';

// INTERFACE
import { FormProps } from './types';

export const Form = ({ children, handleSubmit }: FormProps): JSX.Element => {
  return <Container onSubmit={handleSubmit}>{children}</Container>;
};

// STYLED COMPONENTS
import { Container } from './styles/Form';

// INTERFACE
import { FormProps } from './types';

const Form = ({ children, handleSubmit }: FormProps): JSX.Element => {
  return <Container onSubmit={handleSubmit}>{children}</Container>;
};

export default Form;

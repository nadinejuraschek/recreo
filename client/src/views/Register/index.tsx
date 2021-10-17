// LAYOUTS
import ImageLayout from 'layouts/ImageLayout';

// STYLED COMPONENTS
import { FormWrapper, Wrapper } from './styles/Register';

// COMPONENTS
import Button from 'components/Button';
import Divider from 'components/Divider';
import Form from 'components/Form';
import Title from 'components/Title';

// VALIDATION
import { validationSchema } from 'schemas';

const initialValues = {
  username: '',
  password: '',
};

const Register = (): JSX.Element => {
  return (
    <ImageLayout>
      <Wrapper>
        <Title size="large">Register</Title>
        <FormWrapper>
          <Form initialValues={initialValues} register validationSchema={validationSchema} />
          <Divider text="or" />
          <Button link="/login" outlined fullWidth>
            Log In
          </Button>
        </FormWrapper>
      </Wrapper>
    </ImageLayout>
  );
};

export default Register;

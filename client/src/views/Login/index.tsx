// LAYOUTS
import ImageLayout from 'layouts/ImageLayout';

// STYLED COMPONENTS
import { FormWrapper, Wrapper } from './styles/Login';

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

const Login = (): JSX.Element => {
  return (
    <ImageLayout>
      <Wrapper>
        <Title marginBottom={5} size="large">
          Log In
        </Title>
        <FormWrapper>
          <Form initialValues={initialValues} login validationSchema={validationSchema} />
          <Divider text="or" />
          <Button link="/register" outlined fullWidth>
            Register
          </Button>
        </FormWrapper>
      </Wrapper>
    </ImageLayout>
  );
};

export default Login;

// DEPENDENCIES
import * as Yup from 'yup';

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
const validationSchema = Yup.object().shape({
  username: Yup.string().required('Please choose a username.'),
  password: Yup.string()
    .min(6, 'Password has to be at least 6 characters long.')
    .max(30, 'Password can not exceed 30 characters.')
    .required('Password is required.'),
});

const initialValues = {
  username: '',
  password: '',
};

const Register = () => {
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

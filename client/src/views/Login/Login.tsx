// DEPENDENCIES
import * as Yup from 'yup';

// LAYOUTS
import ImageLayout from 'layouts/ImageLayout/ImageLayout';

// COMPONENTS
import Button from 'components/Button/Button';
import Divider from 'components/Divider/Divider';
import Form from 'components/Form/Form';
import Title from 'components/Title/Title';

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

const Login = () => {
  return (
    <ImageLayout>
      <Title size="large">Log In</Title>
      <Form initialValues={initialValues} validationSchema={validationSchema} />
      <Divider text="or" />
      <Button link="/login" outlined fullWidth>
        Register
      </Button>
    </ImageLayout>
  );
};

export default Login;

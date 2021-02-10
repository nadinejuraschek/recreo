// LAYOUTS
import ImageLayout from 'layouts/ImageLayout/ImageLayout';

// COMPONENTS
import Button from 'components/Button/Button';
import Divider from 'components/Divider/Divider';
import Input from 'components/Input/Input';
import Title from 'components/Title/Title';

const Login = () => {
  return (
    <ImageLayout>
      <Title size="large">Log In</Title>
      <Input placeholder="Username" type="text" icon />
      <Input placeholder="Password" type="password" icon />
      <Button filled fullWidth>
        Login
      </Button>
      <Divider text="or" />
      <Button link="/login" outlined fullWidth>
        Register
      </Button>
    </ImageLayout>
  );
};

export default Login;

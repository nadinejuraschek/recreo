// LAYOUTS
import ImageLayout from 'layouts/ImageLayout/ImageLayout';

// COMPONENTS
import Button from 'components/Button/Button';
import Divider from 'components/Divider/Divider';
import Input from 'components/Input/Input';

const Login = () => {
  return (
    <ImageLayout>
      <Input label="Name" type="text" />
      <Divider text="or" />
      <Button link="/login" outlined fullWidth>
        Register
      </Button>
    </ImageLayout>
  );
};

export default Login;

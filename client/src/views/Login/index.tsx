// DEPENDENCIES
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// STYLED COMPONENTS
import { FormWrapper, Wrapper } from './styles/Login';

// COMPONENTS
import Button from 'components/Button';
import Divider from 'components/Divider';
import Form from 'components/Form';
import Input from 'components/Input';
import Title from 'components/Title';
import Toast from 'components/Toast';

// VALIDATION
import { loginSchema } from 'schemas';

// CONTEXT
import { UserContext } from 'context/UserContext';

// ICONS
import lock from 'assets/lock.svg';
import user from 'assets/user.svg';

const Login = (): JSX.Element => {
  const { loading, error, loginUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<any>({
    defaultValues: {
      password: '',
      email: '',
    },
    resolver: yupResolver(loginSchema),
    mode: 'onBlur',
  });

  const onSubmit = (formData: { email: string; password: string }) => {
    console.log('submitted login data: ', formData);
    if (loginUser) {
      loginUser(formData);
    }
  };

  return (
    <Wrapper>
      <Title marginBottom={5} size="large">
        Log In
      </Title>
      <FormWrapper>
        <Form handleSubmit={handleSubmit(onSubmit)}>
          <Input
            name="email"
            placeholder="Username"
            type="text"
            icon={user}
            iconName="User Icon"
            register={register}
            error={errors?.email?.message}
          />
          <Input
            name="password"
            placeholder="Password"
            type="password"
            icon={lock}
            iconName="Lock Icon"
            register={register}
            error={errors?.password?.message}
          />
          <Button $disabled={!isValid || isSubmitting} $filled $fullWidth loading={isSubmitting || loading} type="submit">
            Log In
          </Button>
        </Form>
        <Divider text="or" />
        <Button link="/register" $outlined $fullWidth>
          Register
        </Button>
      </FormWrapper>
      <Toast type="success" open={Boolean(error)}>
        Some error message displays here.
      </Toast>
      {error && (
        <Toast type="danger" open={Boolean(error)}>
          {error}
        </Toast>
      )}
    </Wrapper>
  );
};

export default Login;

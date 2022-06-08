// DEPENDENCIES
import { useContext, useState } from 'react';
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
import lockIcon from 'assets/lock.svg';
import userIcon from 'assets/user.svg';
import { useEffect } from 'react';

const Login = (): JSX.Element => {
  const { error, loading, loginUser } = useContext(UserContext);
  const [showError, setShowError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<any>({
    defaultValues: {
      password: '',
      username: '',
    },
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
  });

  useEffect(() => {
    error ? setShowError(true) : setShowError(false);
  }, [error]);

  const onSubmit = (formData: { username: string; password: string }) => {
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
            name="username"
            placeholder="Username"
            type="text"
            icon={userIcon}
            iconName="User Icon"
            register={register}
            error={errors?.username?.message}
          />
          <Input
            name="password"
            placeholder="Password"
            type="password"
            icon={lockIcon}
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
      {showError && (
        <Toast type="danger" open={showError}>
          {error}
        </Toast>
      )}
    </Wrapper>
  );
};

export default Login;

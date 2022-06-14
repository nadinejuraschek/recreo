// DEPENDENCIES
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// STYLED COMPONENTS
import { ButtonWrapper, FormWrapper, Wrapper } from './styles/Login';

// COMPONENTS
import { Button, Divider, Form, Input, Title, Toast } from 'components';

// DATA
import { testUserData } from 'data';

// VALIDATION
import { loginSchema } from 'schemas';

// CONTEXT
import { UserContext } from 'context/UserContext';

// ICONS
import lockIcon from 'assets/lock.svg';
import userIcon from 'assets/user.svg';

export const Login = (): JSX.Element => {
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

  const onSubmitTestUser = (): void => {
    if (loginUser) {
      loginUser(testUserData);
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
        <ButtonWrapper>
          <Button link="/register" $outlined $fullWidth>
            Register
          </Button>
          <Button $outlined $fullWidth handleClick={onSubmitTestUser}>
            Use Test Account
          </Button>
        </ButtonWrapper>
      </FormWrapper>
      {showError && <Toast type="danger">{error}</Toast>}
    </Wrapper>
  );
};

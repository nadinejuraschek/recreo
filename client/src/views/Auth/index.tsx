import { useCallback, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ButtonWrapper, FormWrapper, Wrapper } from './styles';
import { Button, Divider, Form, Input, Title } from 'components';
import { testUserData } from 'data';
import { loginSchema } from 'schemas';
import { UserContext } from 'context/UserContext';
import lockIcon from 'assets/lock.svg';
import userIcon from 'assets/user.svg';
import { AUTH_MODE, AuthProps } from './types';

export const Auth = ({ mode = AUTH_MODE.LOGIN }: AuthProps): JSX.Element => {
  const { loading, loginUser, registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<{ username: string; password: string }>({
    defaultValues: {
      password: '',
      username: '',
    },
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
  });

  const onSubmit = useCallback(
    async (formData: { username: string; password: string }) => {
      if (mode === AUTH_MODE.REGISTER) {
        if (!registerUser) return;
        await registerUser(formData);
        return;
      }

      if (!loginUser) return;
      await loginUser(formData);
    },
    [loginUser, mode, registerUser]
  );

  const onSubmitTestUser = useCallback(async () => {
    if (!loginUser) return;
    await loginUser(testUserData);
  }, [loginUser, testUserData]);

  return (
    <Wrapper>
      <Title marginBottom={2.5} size="large">
        {mode === AUTH_MODE.REGISTER ? 'Register' : 'Log In'}
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
          <Button disabled={!isValid || isSubmitting} fullWidth loading={isSubmitting || loading} type="submit">
            {mode === AUTH_MODE.REGISTER ? 'Register' : 'Log In'}
          </Button>
        </Form>
        <Divider text="or" />
        <ButtonWrapper>
          <Button link={mode === AUTH_MODE.REGISTER ? '/login' : '/register'} fullWidth variant="secondary">
            {mode === AUTH_MODE.REGISTER ? 'Log In' : 'Register'}
          </Button>
          <Button fullWidth onClick={onSubmitTestUser} variant="tertiary">
            Use Test Account
          </Button>
        </ButtonWrapper>
      </FormWrapper>
    </Wrapper>
  );
};

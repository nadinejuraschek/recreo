// DEPENDENCIES
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// STYLED COMPONENTS
import { FormWrapper, Wrapper } from './styles/Register';

// COMPONENTS
import { Button, Divider, Form, Input, Title } from 'components';

// CONTEXT
import { UserContext } from 'context/UserContext';

// ICONS
import lock from 'assets/lock.svg';
import user from 'assets/user.svg';

// VALIDATION
import { registerSchema } from 'schemas';

export const Register = (): JSX.Element => {
  const { loading, error, registerUser } = useContext(UserContext);

  const defaultValues = {
    password: '',
    username: '',
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<any>({
    defaultValues,
    resolver: yupResolver(registerSchema),
    mode: 'onChange',
  });

  const onSubmit = (formData: { username: string; password: string }) => {
    if (registerUser) {
      registerUser(formData);
    }
    reset();
  };

  return (
    <Wrapper>
      <Title size="large">Register</Title>
      <FormWrapper>
        <Form handleSubmit={handleSubmit(onSubmit)}>
          <Input
            name="username"
            placeholder="Username"
            type="text"
            icon={user}
            iconName="User Icon"
            register={register}
            error={errors?.username?.message}
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
            Register
          </Button>
        </Form>
        <Divider text="or" />
        <Button link="/login" $outlined $fullWidth>
          Log In
        </Button>
      </FormWrapper>
      {error && <div>{error}</div>}
    </Wrapper>
  );
};

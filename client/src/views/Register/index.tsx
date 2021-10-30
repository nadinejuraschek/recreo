// DEPENDENCIES
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// STYLED COMPONENTS
import { FormWrapper, Wrapper } from './styles/Register';

// COMPONENTS
import Button from 'components/Button';
import Divider from 'components/Divider';
import Form from 'components/Form';
import Input from 'components/Input';
import Title from 'components/Title';

// CONTEXT
import { UserContext } from 'context/UserContext';

// ICONS
import lock from 'assets/lock.svg';
import user from 'assets/user.svg';

// VALIDATION
import { registerSchema } from 'schemas';

const Register = (): JSX.Element => {
  const { loading, error, registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<any>({
    defaultValues: {
      password: '',
      email: '',
    },
    resolver: yupResolver(registerSchema),
    mode: 'onChange',
  });

  const onSubmit = (formData: { email: string; password: string }) => {
    console.log('submitted register data: ', formData);
    if (registerUser) {
      registerUser(formData);
    }
  };

  return (
    <Wrapper>
      <Title size="large">Register</Title>
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

export default Register;

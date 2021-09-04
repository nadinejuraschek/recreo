// COMPONENTS
import Button from 'components/Button';
import Input from 'components/Input';

// ICONS
import lock from 'assets/lock.svg';
import user from 'assets/user.svg';

interface LoginFormProps {
  errors: any;
  isValid: boolean;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ errors, isValid, setFieldValue }) => {
  return (
    <>
      <Input placeholder="Username" type="text" icon={user} iconName="User Icon" handleChange={setFieldValue} error={errors.username} />
      <Input placeholder="Password" type="password" icon={lock} iconName="Lock Icon" handleChange={setFieldValue} error={errors.password} />
      <Button filled fullWidth disabled={isValid} type="submit">
        Log In
      </Button>
    </>
  );
};

export default LoginForm;

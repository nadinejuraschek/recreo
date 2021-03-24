// COMPONENTS
import Button from 'components/Button';
import Input from 'components/Input';

interface RegisterFormProps {
  errors: any;
  isValid: boolean;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ errors, isValid, setFieldValue }) => {
  return (
    <>
      <Input placeholder="Username" type="text" icon handleChange={setFieldValue} error={errors.username} />
      <Input placeholder="Password" type="password" icon handleChange={setFieldValue} error={errors.password} />
      <Button filled fullWidth disabled={isValid} type="submit">
        Register
      </Button>
    </>
  );
};

export default RegisterForm;

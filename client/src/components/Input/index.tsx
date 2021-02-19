// STYLED COMPONENTS
import { Label, StyledInput, Validation, Wrapper } from './styles/Input';

interface InputProps {
  error: any;
  handleChange: any;
  label?: string;
  icon?: any;
  placeholder?: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ error, handleChange, label, icon, placeholder = '', type = 'text' }) => {
  console.log('error: ', error);
  return (
    <Wrapper>
      {label ? <Label>{label}</Label> : null}
      {icon}
      <StyledInput onChange={handleChange} placeholder={placeholder} type={type} withIcon={icon} />
      {error && <Validation>{error}</Validation>}
    </Wrapper>
  );
};

export default Input;

// STYLED COMPONENTS
import { Label, StyledInput, Validation, Wrapper } from './styles/Input';

interface InputProps {
  label?: string;
  icon?: any;
  placeholder?: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ label, icon, placeholder = '', type = 'text' }) => {
  return (
    <Wrapper>
      {label ? <Label>{label}</Label> : null}
      {icon}
      <StyledInput placeholder={placeholder} type={type} withIcon={icon} />
      <Validation />
    </Wrapper>
  );
};

export default Input;

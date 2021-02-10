// STYLED COMPONENTS
import { Label, StyledInput, Validation, Wrapper } from './styles/Input';

interface InputProps {
  label?: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ label, type = 'text' }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <StyledInput type={type} />
      <Validation />
    </Wrapper>
  );
};

export default Input;

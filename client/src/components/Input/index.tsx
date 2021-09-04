// STYLED COMPONENTS
import { Container, Icon, Label, StyledInput, StyledTextarea, Validation, Wrapper } from './styles/Input';

interface InputProps {
  error: any;
  handleChange: any;
  label?: string;
  icon?: string;
  iconName?: string;
  placeholder?: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ error, handleChange, label, icon, iconName = '', placeholder = '', type = 'text' }) => {
  const withIcon = icon ? true : false;

  return (
    <Container>
      {label && <Label>{label}</Label>}
      {type === 'textarea' ? (
        <StyledTextarea onChange={handleChange} placeholder={placeholder} type={type} />
      ) : (
        <Wrapper>
          {icon && <Icon alt={iconName} src={icon} />}
          <StyledInput onChange={handleChange} placeholder={placeholder} type={type} withIcon={withIcon} />
        </Wrapper>
      )}
      {error && <Validation>{error}</Validation>}
    </Container>
  );
};

export default Input;

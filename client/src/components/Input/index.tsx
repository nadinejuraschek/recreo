// STYLED COMPONENTS
import { Container, Icon, Label, StyledInput, StyledTextarea, Validation, Wrapper } from './styles/Input';

// INTERFACES
import { InputProps } from './types';

const Input = ({
  error,
  label = undefined,
  icon = undefined,
  iconName = '',
  name,
  placeholder = '',
  register,
  type = 'text',
}: InputProps): JSX.Element => {
  const withIcon = icon ? true : false;

  return (
    <Container>
      {label && <Label>{label}</Label>}
      {type === 'textarea' ? (
        <StyledTextarea placeholder={placeholder} {...register(name)} type={type} />
      ) : (
        <Wrapper>
          {icon && <Icon alt={iconName} src={icon} />}
          <StyledInput autoComplete="off" placeholder={placeholder} type={type} {...register(name)} withIcon={withIcon} />
        </Wrapper>
      )}
      {error && <Validation>{error}</Validation>}
    </Container>
  );
};

export default Input;

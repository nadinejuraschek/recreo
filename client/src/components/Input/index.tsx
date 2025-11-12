// STYLED COMPONENTS
import { Container, Icon, Label, StyledInput, StyledTextarea, Validation, Wrapper } from './styles';

// INTERFACES
import { InputProps } from './types';

export const Input = ({
  error,
  label = undefined,
  icon = undefined,
  iconName = '',
  maxChars,
  name,
  placeholder = '',
  register,
  required = false,
  step = '',
  type = 'text',
}: InputProps): JSX.Element => {
  const withIcon = icon ? true : false;

  const renderInput = () => {
    switch (type) {
      case 'textarea':
        return <StyledTextarea maxlength={maxChars} placeholder={placeholder} required={required} rows={5} {...register(name)} />;
      case 'number':
        return (
          <Wrapper>
            {icon && <Icon alt={iconName} src={icon} />}
            <StyledInput
              autoComplete="off"
              inputmode="decimal"
              placeholder={placeholder}
              required={required}
              step={step}
              type="number"
              {...register(name)}
              withIcon={withIcon}
            />
          </Wrapper>
        );
      default:
        return (
          <Wrapper>
            {icon && <Icon alt={iconName} src={icon} />}
            <StyledInput
              autoComplete="off"
              maxlength={maxChars}
              placeholder={placeholder}
              required={required}
              type="text"
              {...register(name)}
              withIcon={withIcon}
            />
          </Wrapper>
        );
    }
  };

  return (
    <Container>
      {label && (
        <Label>
          {label} {required ? '*' : ''}
        </Label>
      )}
      {renderInput()}
      {error && <Validation>{error}</Validation>}
    </Container>
  );
};

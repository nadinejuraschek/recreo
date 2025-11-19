import { Container, Icon, Label, StyledInput, StyledTextarea, Validation, Wrapper } from './styles';
import { InputProps } from './types';

export const Input = ({
  error,
  label = undefined,
  icon = undefined,
  iconName = '',
  maxChars,
  name,
  placeholder,
  register,
  required = false,
  step = '',
  type = 'text',
}: InputProps): JSX.Element => {
  const sharedProps = { autoComplete: 'off', name, placeholder, required, type };

  const renderInput = () => {
    switch (type) {
      case 'textarea':
        return <StyledTextarea {...sharedProps} maxlength={maxChars} rows={5} {...register(name)} />;
      case 'number':
        return (
          <Wrapper>
            {icon && <Icon alt={iconName} src={icon} />}
            <StyledInput {...sharedProps} inputmode="decimal" step={step} {...register(name)} withIcon={!!icon} />
          </Wrapper>
        );
      default:
        return (
          <Wrapper>
            {icon && <Icon alt={iconName} src={icon} />}
            <StyledInput {...sharedProps} maxlength={maxChars} {...register(name)} withIcon={!!icon} />
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
      <Validation>{error ?? ''}</Validation>
    </Container>
  );
};

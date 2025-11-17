import { StyledLink, StyledButton } from './styles';
import { ButtonProps } from './types';

export const Button = ({
  children,
  className = '',
  disabled = false,
  $filled = true,
  $fullWidth = false,
  onClick,
  onSubmit,
  loading = false,
  link = undefined,
  $outlined = false,
  $rounded = false,
  $small = false,
  type = 'button',
  $underlined = false,
}: ButtonProps): JSX.Element => {
  const isDisabled = disabled || loading;

  return (
    <>
      {link ? (
        <StyledLink
          className={className}
          disabled={isDisabled}
          $filled={$filled}
          $fullWidth={$fullWidth}
          $outlined={$outlined}
          $rounded={$rounded}
          $small={$small}
          to={link}
          $underlined={$underlined}
          aria-busy={loading}
          aria-disabled={isDisabled}
          tabIndex={isDisabled ? -1 : undefined}
        >
          {loading ? 'Loading...' : children}
        </StyledLink>
      ) : (
        <StyledButton
          aria-busy={loading}
          className={className}
          disabled={isDisabled}
          $filled={$filled}
          $fullWidth={$fullWidth}
          onClick={onClick}
          onSubmit={onSubmit}
          $outlined={$outlined}
          $rounded={$rounded}
          $small={$small}
          type={type}
          $underlined={$underlined}
        >
          {loading ? 'Loading...' : children}
        </StyledButton>
      )}
    </>
  );
};

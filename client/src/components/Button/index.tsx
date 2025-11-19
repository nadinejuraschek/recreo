import { StyledLink, StyledButton } from './styles';
import { ButtonProps } from './types';

export const Button = ({
  children,
  className = '',
  disabled = false,
  fullWidth = false,
  onClick,
  onSubmit,
  loading = false,
  link = undefined,
  type = 'button',
  variant = 'primary',
}: ButtonProps): JSX.Element => {
  const isDisabled = disabled || loading;

  return (
    <>
      {link ? (
        <StyledLink
          className={className}
          disabled={isDisabled}
          $fullWidth={fullWidth}
          to={link}
          aria-busy={loading}
          aria-disabled={isDisabled}
          tabIndex={isDisabled ? -1 : undefined}
          $variant={variant}
        >
          {loading ? 'Loading...' : children}
        </StyledLink>
      ) : (
        <StyledButton
          aria-busy={loading}
          className={className}
          disabled={isDisabled}
          $fullWidth={fullWidth}
          onClick={onClick}
          onSubmit={onSubmit}
          type={type}
          $variant={variant}
        >
          {loading ? 'Loading...' : children}
        </StyledButton>
      )}
    </>
  );
};

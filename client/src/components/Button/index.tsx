// STYLED COMPONENTS
import { StyledLink, StyledButton } from './styles/Button';

// INTERFACES
import { ButtonProps } from './types';

const Button = ({
  children,
  $disabled = false,
  $filled = true,
  $fullWidth = false,
  handleClick,
  handleSubmit,
  loading = false,
  link = undefined,
  $outlined = false,
  $rounded = false,
  $small = true,
  type = 'button',
}: ButtonProps): JSX.Element => {
  return (
    <>
      {link ? (
        <StyledLink $disabled={$disabled} $filled={$filled} $fullWidth={$fullWidth} $outlined={$outlined} $rounded={$rounded} to={link}>
          {children}
        </StyledLink>
      ) : (
        <StyledButton
          $disabled={$disabled}
          $filled={$filled}
          $fullWidth={$fullWidth}
          onClick={handleClick}
          onSubmit={handleSubmit}
          $outlined={$outlined}
          $rounded={$rounded}
          $small={$small}
          type={type}
        >
          {loading ? 'Loading...' : children}
        </StyledButton>
      )}
    </>
  );
};

export default Button;

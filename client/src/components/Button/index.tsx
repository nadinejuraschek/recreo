// STYLED COMPONENTS
import { StyledLink, StyledButton } from './styles/Button';

// INTERFACES
import { ButtonProps } from './types';

export const Button = ({
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
  $small = false,
  type = 'button',
  $underlined = false,
}: ButtonProps): JSX.Element => {
  return (
    <>
      {link ? (
        <StyledLink
          $disabled={$disabled}
          $filled={$filled}
          $fullWidth={$fullWidth}
          $outlined={$outlined}
          $rounded={$rounded}
          $small={$small}
          to={link}
          $underlined={$underlined}
        >
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
          $underlined={$underlined}
        >
          {loading ? 'Loading...' : children}
        </StyledButton>
      )}
    </>
  );
};

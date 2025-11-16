import { StyledLink, StyledButton } from './styles';
import { ButtonProps } from './types';

export const Button = ({
  children,
  className = '',
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
          className={className}
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
          className={className}
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

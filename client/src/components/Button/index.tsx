// DEPENDENCIES

// STYLED COMPONENTS
import { StyledLink, StyledButton } from './styles/Button';

interface ButtonProps {
  disabled?: boolean;
  filled?: boolean;
  fullWidth?: boolean;
  handleClick?: () => void;
  handleSubmit?: () => void;
  link?: string;
  outlined?: boolean;
  rounded?: boolean;
  small?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  filled,
  fullWidth,
  handleClick,
  handleSubmit,
  link,
  outlined,
  rounded,
  small,
  type,
}) => {
  return (
    <>
      {link ? (
        <StyledLink disabled={disabled} filled={filled} fullWidth={fullWidth} outlined={outlined} rounded={rounded} to={link}>
          {children}
        </StyledLink>
      ) : (
        <StyledButton
          disabled={disabled}
          filled={filled}
          fullWidth={fullWidth}
          onClick={handleClick}
          onSubmit={handleSubmit}
          outlined={outlined}
          rounded={rounded}
          small={small}
          type={type}
        >
          {children}
        </StyledButton>
      )}
    </>
  );
};

export default Button;

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
  type?: any;
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
          type={type}
        >
          {children}
        </StyledButton>
      )}
    </>
  );
};

export default Button;

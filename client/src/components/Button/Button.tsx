// DEPENDENCIES

// STYLED COMPONENTS
import { StyledLink, StyledButton } from './styles/Button';

interface ButtonProps {
  disabled?: boolean;
  filled?: boolean;
  fullWidth?: boolean;
  link?: string;
  outlined?: boolean;
  rounded?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, disabled, filled, fullWidth, link, outlined, rounded }) => {
  return (
    <>
      {link ? (
        <StyledLink disabled={disabled} filled={filled} fullWidth={fullWidth} outlined={outlined} rounded={rounded} to={link}>
          {children}
        </StyledLink>
      ) : (
        <StyledButton disabled={disabled} filled={filled} fullWidth={fullWidth} outlined={outlined} rounded={rounded}>
          {children}
        </StyledButton>
      )}
    </>
  );
};

export default Button;

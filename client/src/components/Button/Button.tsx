// DEPENDENCIES

// STYLED COMPONENTS
import { Link, StyledButton } from './styles/Button';

interface ButtonProps {
  disabled?: boolean;
  filled?: boolean;
  fullWidth?: boolean;
  link?: boolean;
  outlined?: boolean;
  rounded?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, disabled, fullWidth, link, outlined, filled, rounded }) => {
  return (
    <>
      {link ? (
        <Link disabled={disabled} filled={filled} fullWidth={fullWidth} outlined={outlined} rounded={rounded}>
          {children}
        </Link>
      ) : (
        <StyledButton disabled={disabled} filled={filled} fullWidth={fullWidth} outlined={outlined} rounded={rounded}>
          {children}
        </StyledButton>
      )}
    </>
  );
};

export default Button;

// DEPENDENCIES

// STYLED COMPONENTS
import { Link, StyledButton } from './styles/Button';

interface ButtonProps {
  fullWidth: boolean;
  link: boolean;
  outlined: boolean;
  primary: boolean;
  rounded: boolean;
  secondary: boolean;
};

const Button: React.FC<ButtonProps> = ({
  fullWidth,
  link,
  outlined,
  primary,
  rounded,
  secondary,
}) => {
  return (
    <>
      {
        link ?
        <Link></Link>
        :
        <StyledButton primary={primary}></StyledButton>
      }
    </>
  );
};

export default Button;

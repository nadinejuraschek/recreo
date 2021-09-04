// DEPENDENCIES
import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
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

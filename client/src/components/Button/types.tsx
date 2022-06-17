// DEPENDENCIES
import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  $disabled?: boolean;
  $filled?: boolean;
  $fullWidth?: boolean;
  handleClick?: () => void;
  handleSubmit?: () => void;
  loading?: boolean;
  link?: string | undefined;
  $outlined?: boolean;
  $rounded?: boolean;
  $small?: boolean;
  type?: 'button' | 'submit' | 'reset';
  $underlined?: boolean;
}

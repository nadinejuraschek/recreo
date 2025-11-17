import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  $filled?: boolean;
  $fullWidth?: boolean;
  loading?: boolean;
  link?: string | undefined;
  onClick?: () => void;
  onSubmit?: () => void;
  $outlined?: boolean;
  $rounded?: boolean;
  $small?: boolean;
  type?: 'button' | 'submit' | 'reset';
  $underlined?: boolean;
}

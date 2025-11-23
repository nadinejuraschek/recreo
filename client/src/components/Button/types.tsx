import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: boolean;
  loading?: boolean;
  link?: string | undefined;
  onClick?: () => void;
  onSubmit?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'tertiary';
}

export interface StyledButtonProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  $fullWidth: boolean;
  $icon?: boolean;
  loading?: boolean;
  link?: string | undefined;
  onClick?: () => void;
  onSubmit?: () => void;
  type?: 'button' | 'submit' | 'reset';
  $variant: 'primary' | 'secondary' | 'tertiary';
}

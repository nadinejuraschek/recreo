// DEPENDENCIES
import { ReactNode } from 'react';

export interface ToastProps {
  children: ReactNode;
  danger?: boolean;
  handleClose: () => void;
  success?: boolean;
}

// DEPENDENCIES
import { ReactNode } from 'react';

export interface ToastProps {
  children: ReactNode;
  open: boolean;
  type?: 'danger' | 'success';
}

export interface ContainerProps {
  type: 'danger' | 'success';
}

export interface TimeoutBarProps {
  width: number;
}

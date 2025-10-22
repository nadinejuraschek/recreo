// DEPENDENCIES
import { ReactNode } from 'react';

export interface ToastProps {
  children: ReactNode;
  type?: 'danger' | 'success';
}

export interface ContainerProps {
  children: ReactNode;
  type: 'danger' | 'success';
}

export interface TimeoutBarProps {
  width: number;
}

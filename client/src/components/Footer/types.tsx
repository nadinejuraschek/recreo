import { ReactNode } from 'react';

export interface FooterProps {
  navFooter?: boolean;
}

export interface ContainerProps {
  children: ReactNode;
  navFooter?: boolean;
}

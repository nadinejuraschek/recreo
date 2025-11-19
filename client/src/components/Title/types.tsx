import { ReactNode } from 'react';

export interface TitleProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  marginBottom?: number;
  size?: 'large' | 'medium' | 'small';
}

export interface StyledTitleProps {
  children: ReactNode;
  className?: string;
  color: string;
  marginBottom: number;
  size: 'large' | 'medium' | 'small';
}

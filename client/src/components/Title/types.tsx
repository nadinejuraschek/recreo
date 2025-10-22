import { ReactNode } from "react";

export interface TitleProps {
  children: React.ReactNode;
  color?: string;
  marginBottom?: number;
  size?: 'large' | 'medium' | 'small';
}

export interface StyledTitleProps {
  children: ReactNode;
  color: string;
  marginBottom: number;
  size: 'large' | 'medium' | 'small';
}

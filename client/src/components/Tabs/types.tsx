import { ReactNode } from 'react';

export interface TabsProps {
  active: string;
  handleClick: (clickedTab: string) => void;
  options: any;
}

export interface StyledTabProps {
  children: ReactNode;
  key: number | string;
  isActive?: boolean;
  onClick: () => void;
  tabNum: number;
}

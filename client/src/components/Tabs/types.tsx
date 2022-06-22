export interface TabsProps {
  active: string;
  handleClick: (clickedTab: string) => void;
  options: any;
}

export interface StyledTabProps {
  isActive?: boolean;
  tabNum: number;
}

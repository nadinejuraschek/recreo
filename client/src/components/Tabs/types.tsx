export interface TabsProps {
  active: string;
  handleClick: (clickedTab: string) => void;
  options: any;
}

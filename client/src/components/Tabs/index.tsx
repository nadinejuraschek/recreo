// STYLED COMPONENTS
import { Container, Tab } from './styles/Tabs';

interface TabsProps {
  active: string;
  handleClick: (clickedTab: string) => void;
  options: any;
}

const Tabs: React.FC<TabsProps> = ({ active, handleClick, options }) => {
  return (
    <Container>
      {options.map((item: any, index: number) => (
        <Tab key={index} isActive={active === item.name} onClick={() => handleClick(item.name)}>
          {item.label}
        </Tab>
      ))}
    </Container>
  );
};

export default Tabs;

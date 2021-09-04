// STYLED COMPONENTS
import { Container, Tab } from './styles/Tabs';

// INTERFACES
import { TabsProps } from './types';

const Tabs = ({ active, handleClick, options }: TabsProps): JSX.Element => {
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

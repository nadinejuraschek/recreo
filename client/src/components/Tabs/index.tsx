// STYLED COMPONENTS
import { Container, Tab } from './styles';

// INTERFACES
import { TabsProps } from './types';

export const Tabs = ({ active, handleClick, options }: TabsProps): JSX.Element => {
  return (
    <Container>
      {options.map((item: any, index: number) => (
        <Tab key={index} isActive={active === item.name} onClick={() => handleClick(item.name)} tabNum={options.length}>
          {item.label}
        </Tab>
      ))}
    </Container>
  );
};

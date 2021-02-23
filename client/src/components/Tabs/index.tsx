// DEPENDENCIES
import { useState } from 'react';

// STYLED COMPONENTS
import { Container, Tab } from './styles/Tabs';

interface TabsProps {
  options: any;
}

const Tabs: React.FC<TabsProps> = ({ options }) => {
  const [active, setActive] = useState(false);

  return (
    <Container>
      {options.map((item: any, index: number) => {
        <Tab key={index}>{item.label}</Tab>;
      })}
    </Container>
  );
};

export default Tabs;

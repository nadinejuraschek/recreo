// DEPENDENCIES
import { useState } from 'react';

// STYLED COMPONENTS
import { Container, Tab } from './styles/Tabs';

interface TabsProps {
  options: any;
}

const Tabs: React.FC<TabsProps> = ({ options }) => {
  const [active, setActive] = useState(options[0].name);

  return (
    <Container>
      {/* {options.map((item: any, index: number) => (
        <Tab key={index} onClick={() => setActive(item.name)}>
          {item.label}
        </Tab>
      ))} */}
      Tabs
    </Container>
  );
};

export default Tabs;

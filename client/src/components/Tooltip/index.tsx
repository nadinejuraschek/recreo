// DEPENDENCIES
import { useState } from 'react';

// STYLED COMPONENTS
import { HoverItem, Wrapper } from './styles/Tooltip';

interface TooltipProps {
  children?: any;
  text: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Wrapper onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)}>
      {children}
      {hovered && <HoverItem>{text}</HoverItem>}
    </Wrapper>
  );
};

export default Tooltip;

// DEPENDENCIES
import { useState } from 'react';

// STYLED COMPONENTS
import { HoverItem, Wrapper } from './styles/Tooltip';

interface TooltipProps {
  children?: any;
}

const Tooltip: React.FC<TooltipProps> = ({ children }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Wrapper onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)}>
      {children}
      {hovered && <HoverItem>This is a hover text.</HoverItem>}
    </Wrapper>
  );
};

export default Tooltip;

// DEPENDENCIES
import { useState } from 'react';

// STYLED COMPONENTS
import { HoverItem, Wrapper } from './styles/Tooltip';

// INTERFACES
import { TooltipProps } from './types';

export const Tooltip = ({ children, text = '' }: TooltipProps): JSX.Element => {
  const [hovered, setHovered] = useState(false);

  return (
    <Wrapper onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)}>
      {children}
      {hovered && <HoverItem>{text}</HoverItem>}
    </Wrapper>
  );
};

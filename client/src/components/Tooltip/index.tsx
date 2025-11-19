import { useState } from 'react';
import { HoverItem, Wrapper } from './styles';
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

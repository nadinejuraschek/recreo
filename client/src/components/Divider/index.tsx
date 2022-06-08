// STYLED COMPONENTS
import { Line, Text, Wrapper } from './styles/Divider';

// INTERFACES
import { DividerProps } from './types';

export const Divider = ({ color = 'var(--blue__dark)', text = undefined }: DividerProps): JSX.Element => {
  return (
    <Wrapper>
      <Line color={color} />
      {text && <Text>{text}</Text>}
    </Wrapper>
  );
};

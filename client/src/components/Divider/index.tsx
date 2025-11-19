import { Line, Text, Wrapper } from './styles';
import { DividerProps } from './types';

export const Divider = ({ color = 'var(--blue_700)', text = undefined }: DividerProps): JSX.Element => (
  <Wrapper className="divider-wrapper">
    <Line color={color} />
    {text && <Text className="divider-text">{text}</Text>}
  </Wrapper>
);

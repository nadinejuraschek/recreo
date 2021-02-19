// STYLED COMPONENTS
import { Line, Text, Wrapper } from './styles/Divider';

interface DividerProps {
  color?: string;
  text?: string;
}

const Divider: React.FC<DividerProps> = ({ color = 'var(--blue__dark)', text }) => {
  return (
    <Wrapper>
      <Line color={color} />
      {text ? <Text>{text}</Text> : null}
    </Wrapper>
  );
};

export default Divider;

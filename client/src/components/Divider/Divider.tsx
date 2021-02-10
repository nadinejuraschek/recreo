// STYLED COMPONENTS
import { Line, Text, Wrapper } from './styles/Divider';

interface DividerProps {
  text?: string;
}

const Divider: React.FC<DividerProps> = ({ text }) => {
  return (
    <Wrapper>
      <Line />
      {text ? <Text>{text}</Text> : null}
    </Wrapper>
  );
};

export default Divider;

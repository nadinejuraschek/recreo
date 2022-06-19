import { Button } from 'components';
import { Highlighted, HomeTitle, Wrapper } from './styles';

export const Home = (): JSX.Element => {
  return (
    <Wrapper>
      <HomeTitle>
        Find Your Ideal <Highlighted>Playground </Highlighted>
        <Highlighted>Location</Highlighted>
      </HomeTitle>
      <Button link="/playgrounds">Let&apos;s Go!</Button>
    </Wrapper>
  );
};

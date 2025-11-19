import { HorizontalImage, HorizontalWave, VerticalImage, VerticalWave, Main } from './styles';
import horizontalWave from 'assets/wave-horizontal.svg';
import verticalWave from 'assets/wave-vertical.svg';
import { ImageLayoutProps } from './types';

export const ImageLayout = ({ children }: ImageLayoutProps): JSX.Element => (
  <>
    <HorizontalImage />
    <HorizontalWave>
      <img src={horizontalWave} alt="Wave" />
    </HorizontalWave>
    <VerticalImage />
    <VerticalWave>
      <img src={verticalWave} alt="Wave" />
    </VerticalWave>
    <Main>{children}</Main>
  </>
);

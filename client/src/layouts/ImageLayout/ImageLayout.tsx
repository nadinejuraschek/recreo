// STYLED COMPONENTS
import { HorizontalImage, HorizontalWave, VerticalImage, VerticalWave, Main } from './styles/ImageLayout';

// ICONS, IMAGES
import horizontalWave from 'assets/wave-horizontal.svg';
import verticalWave from 'assets/wave-vertical.svg';

interface ImageLayoutProps {
  children: any;
}

const ImageLayout: React.FC<ImageLayoutProps> = ({ children }) => {
  return (
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
};

export default ImageLayout;

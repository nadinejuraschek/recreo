import { Carousel } from 'react-responsive-carousel';
import { Wrapper, ImageActive } from './styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { PreviewProps } from './types';
import playgroundPlaceholder from 'assets/placeholder_playground.png';
import { ReactChild, useMemo } from 'react';

export const Preview = ({ images = [], name = '' }: PreviewProps): JSX.Element => {
  const renderImages = useMemo((): ReactChild[] | undefined => {
    if (!images || images.length === 0) {
      return [
        <ImageActive key="Image Placeholder">
          <img src={playgroundPlaceholder} alt="Image Placeholder" />
        </ImageActive>,
      ];
    }

    return images.map((imgSrc, index) => (
      <ImageActive key={`Image #${index + 1}`}>
        <img src={imgSrc} alt={`${name} Image #${index + 1}`} />
      </ImageActive>
    ));
  }, [images, playgroundPlaceholder]);

  return (
    <Wrapper>
      <Carousel
        emulateTouch
        infiniteLoop
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        thumbWidth={100}
        useKeyboardArrows={false}
      >
        {renderImages}
      </Carousel>
    </Wrapper>
  );
};

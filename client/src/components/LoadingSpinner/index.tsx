// STYLED COMPONENTS
import { Container, SpinnerContainer, SpinnerPath, SVG } from './styles';

// INTERFACES
import { LoadingSpinnerProps } from './types';

export const LoadingSpinner = ({ containerHeight = 'auto', containerWidth = 'auto', size = 100 }: LoadingSpinnerProps): JSX.Element => (
  <>
    <Container height={containerHeight} width={containerWidth}>
      <SpinnerContainer>
        <SpinnerPath size={size}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </SpinnerPath>
      </SpinnerContainer>
    </Container>

    <SVG xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </SVG>
  </>
);

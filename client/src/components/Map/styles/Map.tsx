// DEPENDENCIES
import styled from 'styled-components';

export const Wrapper = styled.div.attrs(() => ({
  className: 'map-wrapper',
}))`
  height: 30rem;
  width: 100%;
  z-index: -1;

  margin-bottom: -6rem;

  .mapboxgl-canvas {
    width: 100%;
  }

  > * {
    z-index: -1;
  }
`;

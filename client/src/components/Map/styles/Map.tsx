// DEPENDENCIES
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 30rem;
  width: 100%;
  z-index: -1;

  margin-bottom: -6rem;

  @media only screen and (min-width: 900px) {
    height: 100%;

    border-radius: 2.4rem 0 0 2.4rem;
    margin-bottom: 0;
    overflow: hidden;
  }

  .mapboxgl-canvas {
    width: 100%;
  }

  > * {
    z-index: -1;
  }
`;

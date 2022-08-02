// DEPENDENCIES
import styled from 'styled-components';

export const FrameWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  height: calc(100vh - 8rem);

  @media only screen and (min-width: 900px) {
    height: calc(100vh - 11rem);
  }
`;

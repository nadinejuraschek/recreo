// DEPENDENCIES
import styled, { keyframes } from 'styled-components';

const placeholderAnimate = keyframes`
  0% {
    background-position: -65rem 0;
  };

  100% {
    background-position: 65rem 0;
  };
`;

export const Container = styled.div`
  background: var(--blue__opaque);
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;

  // Animation
  animation-duration: 1.7s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: ${placeholderAnimate};
  background: var(--white__off); // Fallback
  background: linear-gradient(to right, var(--white__off) 2%, #eee 18%, var(--white__off) 33%);
  background-size: 130rem; // Animation Area
`;

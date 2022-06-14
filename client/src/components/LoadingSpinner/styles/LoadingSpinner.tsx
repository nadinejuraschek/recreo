// DEPENDENCIES
import styled, { keyframes } from 'styled-components';

const spinner = keyframes`
 0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div<{
  readonly height: string;
  readonly width: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;

export const SpinnerContainer = styled.div`
  filter: url(#gooey);
`;

export const SpinnerPath = styled.div<{
  size: number;
}>`
  height: ${({ size }) => `${size}px`};
  width: ${({ size }) => `${size}px`};

  margin-top: ${({ size }) => `${size / 2}px`};

  > * {
    animation: ${spinner} 3s infinite;

    &:after {
      border-radius: 50%;
      content: ' ';
      display: block;

      position: absolute;

      height: 2rem;
      width: 2rem;
    }

    &:nth-child(1) {
      animation-delay: 0.5s;
      &:after {
        background: var(--orange);
      }
    }

    &:nth-child(2) {
      animation-delay: 1s;
      &:after {
        background: var(--green);
      }
    }

    &:nth-child(3) {
      animation-delay: 1.5;
      &:after {
        background: var(--yellow);
      }
    }
    &:nth-child(4) {
      animation-delay: 2s;
      &:after {
        background: var(--blue__medium);
      }
    }
  }
`;

export const SVG = styled.svg`
  display: none;
`;

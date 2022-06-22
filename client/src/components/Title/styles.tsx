// DEPENDENCIES
import styled, { css } from 'styled-components';

// INTERFACES
import { StyledTitleProps } from './types';

const sizeStyling = (size: 'large' | 'medium' | 'small') => {
  switch (size) {
    case 'large':
      return css`
        font-size: 4rem;

        @media only screen and (min-width: 768px) {
          font-size: 4.5rem;
        }

        @media only screen and (min-width: 900px) {
          font-size: 5.5rem;
        }
      `;
    case 'medium':
      return css`
        font-size: 3.25rem;

        @media only screen and (min-width: 768px) {
          font-size: 3.75rem;
        }

        @media only screen and (min-width: 900px) {
          font-size: 4.75rem;
        }
      `;
    case 'small':
      return css`
        font-size: 3.25rem;

        @media only screen and (min-width: 768px) {
          font-size: 3.75rem;
        }

        @media only screen and (min-width: 900px) {
          font-size: 4.75rem;
        }
      `;
    default:
      return css``;
  }
};

export const StyledTitle = styled.h1.attrs(() => ({
  className: 'title',
}))<StyledTitleProps>`
  font-weight: bold;
  color: ${({ color }) => color};

  margin-bottom: ${({ marginBottom }) => `${marginBottom}rem`};
  @media only screen and (min-width: 900px) {
    margin-bottom: ${({ marginBottom }) => `${marginBottom + 1}rem`};
  }

  ${({ size }) => sizeStyling(size)}
`;

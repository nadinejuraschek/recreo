// DEPENDENCIES
import styled, { css } from 'styled-components';

export const LargeTitle = styled.h1.attrs(() => ({
  className: 'title__large',
}))`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;

  @media only screen and (min-width: 768px) {
    font-size: 2.25rem;
    margin-bottom: 2rem;
  }

  @media only screen and (min-width: 900px) {
    font-size: 2.5rem;
  }

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;

export const MediumTitle = styled.h2.attrs(() => ({
  className: 'title__medium',
}))`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.25rem;

  @media only screen and (min-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }

  @media only screen and (min-width: 900px) {
    font-size: 2rem;
  }

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;

export const SmallTitle = styled.h3.attrs(() => ({
  className: 'title__small',
}))`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1.25rem;

  @media only screen and (min-width: 900px) {
    font-size: 1.5rem;
  }

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;

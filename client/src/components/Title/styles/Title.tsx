// DEPENDENCIES
import styled, { css } from 'styled-components';

export const LargeTitle = styled.h1.attrs(() => ({
  className: 'title__large',
}))`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 2rem;

  @media only screen and (min-width: 768px) {
    font-size: 4.5rem;
  }

  @media only screen and (min-width: 900px) {
    font-size: 5.5rem;
    margin-bottom: 3rem;
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
  font-size: 3.25rem;
  font-weight: bold;
  margin-bottom: 2rem;

  @media only screen and (min-width: 768px) {
    font-size: 3.75rem;
  }

  @media only screen and (min-width: 900px) {
    font-size: 4.75rem;
    margin-bottom: 3rem;
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
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;

  @media only screen and (min-width: 768px) {
    font-size: 3rem;
  }

  @media only screen and (min-width: 900px) {
    font-size: 3.75rem;
    margin-bottom: 3rem;
  }

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;

// DEPENDENCIES
import styled, { css } from 'styled-components';

export const LargeTitle = styled.h1.attrs(() => ({
  className: 'title__large',
}))`
  font-size: 2.5rem;
  font-weight: bold;

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;

export const MediumTitle = styled.h2.attrs(() => ({
  className: 'title__medium',
}))`
  font-size: 2rem;
  font-weight: bold;

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;

export const SmallTitle = styled.h3.attrs(() => ({
  className: 'title__small',
}))`
  font-size: 1.5rem;
  font-weight: bold;

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;

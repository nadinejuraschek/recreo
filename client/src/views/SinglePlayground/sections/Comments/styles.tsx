// DEPENDENCIES
import styled from 'styled-components';

export const Container = styled.div.attrs(() => ({
  className: 'single-playground__comments-container',
}))`
  grid-row: 1 / 2;

  height: 100%;

  padding: 4rem 0 0;
`;

export const EmptyComments = styled.div.attrs(() => ({
  className: 'single-playground__comments-empty',
}))`
  font-size: 1.8rem;
  margin: 2.4rem 0;
`;

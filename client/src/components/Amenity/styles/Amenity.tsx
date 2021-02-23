// DEPENDENCIES
import styled from 'styled-components';

export const Container = styled.div.attrs(() => ({
  className: 'amenity-container',
}))`
  background-color: pink;
  border-radius: 0.8rem;
  height: 5rem;
  width: 5rem;
`;

export const Icon = styled.div.attrs(() => ({
  className: 'amenity-icon',
}))``;

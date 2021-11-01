// DEPENDENCIES
import styled from 'styled-components';

export const List = styled.div.attrs(() => ({
  className: 'single-playground__amenities-list',
}))`
  font-size: 1.4rem;
  margin-top: 1rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const Item = styled.div.attrs(() => ({
  className: 'single-playground__amenities-item',
}))`
  display: flex;
  align-items: center;

  padding: 0.5rem 0;

  .amenity-container {
    margin-right: 1rem;
  }
`;

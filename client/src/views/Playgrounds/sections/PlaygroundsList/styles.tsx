// DEPENDENCIES
import styled from 'styled-components';

export const ButtonWrapper = styled.section.attrs(() => ({
  className: 'playgrounds-section-button',
}))`
  margin: 0 0 3rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 900px) {
    margin: 0 0 5rem;
  }
`;

export const Grid = styled.div.attrs(() => ({
  className: 'playgrounds-grid',
}))`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 2rem;
  justify-content: center;

  width: 100%;

  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
  }
`;

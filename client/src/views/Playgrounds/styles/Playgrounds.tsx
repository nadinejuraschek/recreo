// DEPENDENCIES
import styled from 'styled-components';

export const Section = styled.section.attrs(() => ({
  className: 'playgrounds-section',
}))`
  margin: 3rem 0;
  width: 100%;
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
  }
`;

export const EmptyState = styled.div.attrs(() => ({
  className: 'playgrounds-empty',
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 24rem;
  width: 100%;

  p {
    color: var(--blue__dark);
    font-size: 2rem;
    font-weight: normal;
    margin-bottom: 2rem;
    text-align: center;

    @media only screen and (min-width: 768px) {
      font-size: 2.2rem;
    }
  }
`;

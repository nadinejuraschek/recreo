// DEPENDENCIES
import styled from 'styled-components';

export const Section = styled.section.attrs(() => ({
  className: 'playgrounds-section',
}))`
  margin: 1rem 0 3rem;
  width: 100%;
`;

export const ButtonWrapper = styled.section.attrs(() => ({
  className: 'playgrounds-section-button',
}))`
  margin: 0 0 3rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlaygroundInfo = styled.div.attrs(() => ({
  className: 'playgrounds-info',
}))`
  background-color: var(--white);
  border: 1px solid var(--white);
  border-radius: 4rem 4rem 0 0;
  padding: 2.4rem;

  @media only screen and (min-width: 900px) {
    padding: 4rem;
  }

  &:hover {
    ${ButtonWrapper} {
      display: flex;
    }
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

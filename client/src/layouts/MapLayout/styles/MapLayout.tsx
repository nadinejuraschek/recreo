// DEPENDENCIES
import styled from 'styled-components';

export const Main = styled.main.attrs(() => ({
  className: 'map-layout__main',
}))`
  min-height: calc(100vh - 8rem);

  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-rows: 1fr;

    min-height: calc(100vh - 11rem);
  }
`;

export const Content = styled.div.attrs(() => ({
  className: 'map-layout__content',
}))`
  width: 100%;

  order: 2;

  background-color: var(--white);
  border: 1px solid var(--white);
  border-radius: 4rem 4rem 0 0;
  padding: 2.4rem;

  @media only screen and (min-width: 900px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;

    padding: 1.2rem 4rem 0;
  }
`;

export const MapWrapper = styled.div.attrs(() => ({
  className: 'map-layout__map-wrapper',
}))`
  order: 1;

  @media only screen and (min-width: 900px) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;

    border-radius: 2.4rem 0 0 2.4rem;
  }
`;

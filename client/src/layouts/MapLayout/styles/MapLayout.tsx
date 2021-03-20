// DEPENDENCIES
import styled from 'styled-components';

export const Main = styled.main.attrs(() => ({
  className: 'map-layout__main',
}))`
  min-height: calc(100vh - 8rem);

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
  padding: 2.4rem;

  @media only screen and (min-width: 900px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;

    padding: 2.4rem 4rem;
  }
`;

export const MapWrapper = styled.div.attrs(() => ({
  className: 'map-layout__map-wrapper',
}))`
  @media only screen and (min-width: 900px) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;

    background-color: #bbb;
    border-radius: 2.4rem 0 0 2.4rem;
  }
`;

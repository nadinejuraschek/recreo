// DEPENDENCIES
import styled from 'styled-components';

export const Main = styled.main.attrs(() => ({
  className: 'map-layout__main',
}))`
  min-height: calc(100vh - 8rem);
  position: relative;

  @media only screen and (min-width: 900px) {
    min-height: calc(100vh - 11rem);
  }
`;

export const MapWrapper = styled.div.attrs(() => ({
  className: 'map-layout__map-wrapper',
}))`
  @media only screen and (min-width: 900px) {
    background-color: #bbb;

    position: absolute;
    top: 0;
    right: 0;

    height: 100%;
    width: 40%;
  }
`;

export const Content = styled.div.attrs(() => ({
  className: 'map-layout__content',
}))`
  padding: 2.4rem;

  @media only screen and (min-width: 900px) {
    background-color: var(--white__off);
    border-radius: 0 2.4rem 2.4rem 0;
    box-shadow: 2px 0 6px var(--shadow__sm);
    padding: 4rem;

    position: absolute;
    top: 0;
    left: 0;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: calc(60% - 3rem) 40%;
    grid-gap: 3rem;

    height: 100%;
    width: 70%;
    z-index: 1;
  }
`;

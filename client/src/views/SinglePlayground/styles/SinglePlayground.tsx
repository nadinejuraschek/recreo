// DEPENDENCIES
import styled from 'styled-components';

export const Content = styled.div.attrs(() => ({
  className: 'single-playground__content',
}))`
  @media only screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 4rem max-content auto;
    grid-gap: 2.4rem;

    height: 100%;
    width: 100%;
  }
`;

export const Header = styled.div.attrs(() => ({
  className: 'single-playground__header',
}))`
  grid-row: 1 / 2;

  display: flex;

  height: 100%;
`;

export const Section = styled.section.attrs(() => ({
  className: 'single-playground__section',
}))`
  grid-row: 2 / 3;

  margin-bottom: 3rem;

  height: 100%;
  width: 100%;
`;

export const TabContent = styled.section.attrs(() => ({
  className: 'single-playground__tab-content',
}))`
  grid-row: 3 / 4;

  background-color: lightblue;
`;

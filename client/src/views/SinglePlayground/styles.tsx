// DEPENDENCIES
import styled from 'styled-components';

export const Content = styled.div`
  @media only screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 4rem max-content 5rem auto;
    grid-gap: 1.2rem;

    height: 100%;
    width: 100%;
  }
`;

export const TabContent = styled.section`
  grid-row: 4 / 5;
`;

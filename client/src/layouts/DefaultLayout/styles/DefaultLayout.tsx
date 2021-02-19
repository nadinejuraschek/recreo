// DEPENDENCIES
import styled from 'styled-components';

export const Main = styled.main.attrs(() => ({
  className: 'default__main',
}))`
  min-height: calc(100vh - 8rem);
  margin: 0 auto;
  max-width: 140rem;

  padding: 2.4rem;

  @media only screen and (min-width: 900px) {
    min-height: calc(100vh - 13rem);
    padding: 4rem;
  }
`;

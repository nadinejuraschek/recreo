// DEPENDENCIES
import styled from 'styled-components';

export const Main = styled.main.attrs(() => ({
  className: 'default__main',
}))`
  height: calc(100vh - 80px);
  max-width: 1400px;

  padding: 24px;

  @media only screen and (min-width: 900px) {
    padding: 40px;
  }
`;

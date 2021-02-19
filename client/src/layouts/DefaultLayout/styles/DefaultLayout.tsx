// DEPENDENCIES
import styled from 'styled-components';

export const Main = styled.main.attrs(() => ({
  className: 'default__main',
}))`
  min-height: calc(100vh - 80px);
  max-width: 1400px;

  padding: 24px;

  @media only screen and (min-width: 900px) {
    min-height: calc(100vh - 130px);
    padding: 40px;
  }
`;

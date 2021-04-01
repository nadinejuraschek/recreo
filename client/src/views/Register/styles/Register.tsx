// DEPENDENCIES
import styled from 'styled-components';

export const Wrapper = styled.div.attrs(() => ({
  className: 'login-wrapper',
}))`
  margin: 0 auto;
  width: 300px;

  @media only screen and (min-width: 768px) {
    margin: 0;
  }

  @media only screen and (min-width: 900px) {
    max-width: 500px;
  }
`;

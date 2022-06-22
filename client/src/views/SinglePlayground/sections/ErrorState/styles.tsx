// STYLED COMPONENTS
import styled from 'styled-components';

export const Container = styled.div.attrs(() => ({
  className: 'single-playground-error-state',
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 2rem;
  text-align: center;

  p {
    margin-bottom: 2.4rem;
  }
`;

// DEPENDENCIES
import styled from 'styled-components';

export const Container = styled.div.attrs(() => ({
  className: 'single-playground__amenities-container',
}))`
  background-color: var(--yellow);
  border: none;
  border-radius: 2.4rem;
  padding: 2.4rem;

  height: 100%;
  width: 30rem;
`;

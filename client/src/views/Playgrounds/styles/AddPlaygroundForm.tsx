// DEPENDENCIES
import styled from 'styled-components';

export const PlaygroundWrapper = styled.div.attrs(() => ({
  className: 'playground-form',
}))`
  padding: 1.2rem 2.4rem 0;
  width: 100%;
`;

export const MultipleInputWrapper = styled.div.attrs(() => ({
  className: 'playground-form-multiple-input-wrapper',
}))`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  align-items: center;
`;

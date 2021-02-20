// DEPENDENCIES
import styled from 'styled-components';

export const Section = styled.section.attrs(() => ({
  className: 'single-playground__section',
}))`
  grid-row: 2 / 3;

  display: flex;
  align-items: top;

  margin-bottom: 3rem;

  height: 100%;
  width: 100%;
`;

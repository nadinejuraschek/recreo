// DEPENDENCIES
import styled from 'styled-components';

export const Wrapper = styled.div.attrs(() => ({
  className: 'divider-wrapper',
}))`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  margin: 0.5rem auto;

  height: 2rem;
  width: 100%;

  @media only screen and (min-width: 900px) {
    height: 2.4rem;
  }
`;

export const Line = styled.span.attrs(() => ({
  className: 'divider-line',
}))`
  background-color: var(--blue__dark);

  position: absolute;
  top: 1rem;
  left: 0;

  height: 1px;
  width: 100%;

  @media only screen and (min-width: 900px) {
    top: 1.2rem;
  }
`;

export const Text = styled.span.attrs(() => ({
  className: 'divider-text',
}))`
  background-color: var(--white);
  font-size: 1rem;
  line-height: 2rem;
  padding: 0 1rem;

  z-index: 2;

  @media only screen and (min-width: 900px) {
    font-size: 1.2rem;
    line-height: 2.4rem;
  }
`;

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

  height: 2.4rem;
  width: 100%;
`;

export const Line = styled.span.attrs(() => ({
  className: 'divider-line',
}))`
  background-color: var(--blue__dark);

  position: absolute;
  top: 1.2rem;
  left: 0;

  height: 1px;
  width: 100%;
`;

export const Text = styled.span.attrs(() => ({
  className: 'divider-text',
}))`
  background-color: var(--white);
  font-size: 1.2rem;
  line-height: 2.4rem;
  padding: 0 1rem;

  z-index: 2;
`;

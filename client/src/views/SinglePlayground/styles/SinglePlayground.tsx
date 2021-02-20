// DEPENDENCIES
import styled from 'styled-components';

export const BackButton = styled.section.attrs(() => ({
  className: 'back-button',
}))`
  position: absolute;
`;

export const Section = styled.section.attrs(() => ({
  className: 'single-playground__section',
}))`
  grid-row: 1 / 2;

  display: flex;
  align-items: top;

  margin-bottom: 3rem;

  height: 100%;
  width: 100%;
`;

export const Amenities = styled.div.attrs(() => ({
  className: 'single-playground__amenities',
}))`
  background-color: var(--orange);
  border: none;
  border-radius: 2.4rem;

  height: 100%;
  width: 30rem;
`;

export const Info = styled.div.attrs(() => ({
  className: 'single-playground__info',
}))`
  height: 100%;
  margin: 0 0 2.4rem 2.4rem;
`;

export const Preview = styled.section.attrs(() => ({
  className: 'single-playground__preview',
}))`
  grid-row: 2 / 3;

  background-color: #ddd;
  width: 100%;
`;

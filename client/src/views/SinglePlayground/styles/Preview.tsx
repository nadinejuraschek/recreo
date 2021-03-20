// DEPENDENCIES
import styled from 'styled-components';

export const Wrapper = styled.section.attrs(() => ({
  className: 'single-playground__preview-wrapper',
}))`
  grid-row: 3 / 4;

  display: grid;
  grid-template-columns: 15rem auto;
  grid-template-rows: 1fr;
  grid-gap: 1rem;

  height: 100%;
  width: 100%;
`;

export const EmptyState = styled.div.attrs(() => ({
  className: 'single-playground__preview-empty',
}))``;

export const ImageList = styled.section.attrs(() => ({
  className: 'single-playground__preview-image-list',
}))`
  overflow: hidden;
  overflow-y: scroll;

  height: 34rem;
  width: 100%;

  img:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const ImagePreview = styled.img.attrs(() => ({
  className: 'single-playground__preview-image',
}))`
  background-position: center center;
  background-size: contain;
  border: none;
  border-radius: 2.4rem;

  height: 13rem;
  width: 13rem;

  &:hover {
    border: 4px solid var(--orange);
  }

  &.active {
    border: 2px solid var(--orange);
  }
`;

export const ImageActive = styled.div.attrs(() => ({
  className: 'single-playground__preview-image-active',
}))`
  border: none;
  border-radius: 2.4rem;
  overflow: hidden;

  height: 100%;
  width: 100%;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

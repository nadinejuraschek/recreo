// DEPENDENCIES
import styled from 'styled-components';

export const Wrapper = styled.section.attrs(() => ({
  className: 'single-playground__preview-wrapper',
}))`
  grid-row: 3 / 4;

  display: flex;
  flex-direction: column;

  .thumb {
    height: 10rem;
    width: 10rem;

    border-radius: 2rem;

    &.selected {
      border: 3px solid var(--orange);
    }

    &:hover {
      border: 3px solid var(--orange);
    }

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;

      border-radius: 1.7rem;
    }
  }

  .thumbs-wrapper {
    margin: 0;
  }
`;

export const EmptyState = styled.div.attrs(() => ({
  className: 'single-playground__preview-empty',
}))``;

export const ImageActive = styled.div.attrs(() => ({
  className: 'single-playground__preview-image-active',
}))`
  border: none;
  border-radius: 2.4rem;
  margin-bottom: 1rem;
  overflow: hidden;

  height: 32rem;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

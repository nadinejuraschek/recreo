// DEPENDENCIES
import styled from 'styled-components';

export const Wrapper = styled.section`
  grid-row: 3 / 4;

  display: flex;
  flex-direction: column;

  .thumb {
    height: 10rem;
    width: 10rem;

    border-radius: 1.2rem;

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

      border-radius: 0.8rem;
    }
  }

  .thumbs-wrapper {
    margin: 0;
  }
`;

export const EmptyState = styled.div``;

export const ImageActive = styled.div`
  border: none;
  margin-bottom: 1rem;
  overflow: hidden;

  height: 32rem;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

// DEPENDENCIES
import styled from 'styled-components';

export const Container = styled.div.attrs(() => ({
  className: 'amenity-container',
}))`
  background-color: var(--orange__opaque);
  border-radius: 0.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 5rem;
  width: 5rem;
`;

export const Icon = styled.div.attrs(() => ({
  className: 'amenity-icon',
}))`
  color: var(--orange);
  height: 3.5rem;
  width: 3.5rem;

  svg {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
`;

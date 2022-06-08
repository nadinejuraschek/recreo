// DEPENDENCIES
import styled from 'styled-components';

export const Container = styled.div.attrs(() => ({
  className: 'amenity-container',
}))`
  display: flex;
  align-items: center;

  padding: 0.5rem 0;
`;

export const IconWrapper = styled.div.attrs(() => ({
  className: 'amenity-icon-wrapper',
}))`
  background-color: var(--orange__opaque);
  border-radius: 0.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 5rem;
  width: 5rem;

  margin-right: 1rem;
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

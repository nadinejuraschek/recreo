// DEPENDENCIES
import styled from 'styled-components';

export const Avatar = styled.div.attrs(() => ({
  className: 'comments-avatar',
}))`
  height: 8rem;
  width: 8rem;

  img {
    border-radius: 1.8rem;

    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  @media only screen and (min-width: 900px) {
    height: 10rem;
    width: 10rem;

    img {
      border-radius: 2.4rem;
    }
  }
`;

export const Container = styled.div.attrs(() => ({
  className: 'comments-item',
}))`
  display: grid;
  grid-template-columns: 8rem auto;
  grid-template-rows: 1fr;
  grid-gap: 1.6rem;

  border-bottom: 1px solid var(--blue__opaque);

  @media only screen and (min-width: 900px) {
    grid-template-columns: 10rem auto;

    padding: 2.4rem 0;
  }
`;

export const Name = styled.div.attrs(() => ({
  className: 'comments-name',
}))`
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 2rem;
  margin-bottom: 0.5rem;
`;

export const TimePosted = styled.div.attrs(() => ({
  className: 'comments-time-posted',
}))`
  color: var(--blue__opaque);
  font-size: 1.4rem;
  line-height: 1.6rem;
  margin-bottom: 1.6rem;
`;

export const Text = styled.div.attrs(() => ({
  className: 'comments-text',
}))`
  font-size: 1.6rem;
  line-height: 2.2rem;
`;

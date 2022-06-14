// DEPENDENCIES
import styled from 'styled-components';

export const Avatar = styled.div.attrs(() => ({
  className: 'comments-avatar',
}))`
  height: 4rem;
  width: 4rem;

  img {
    border-radius: 0.8rem;

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

export const Header = styled.div.attrs(() => ({
  className: 'comments-header',
}))`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Container = styled.div.attrs(() => ({
  className: 'comments-item',
}))`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  border-radius: 2.4rem;
  box-shadow: 0 2px 6px var(--shadow__sm);
  margin-bottom: 1rem;
  padding: 1.5rem;

  @media only screen and (min-width: 900px) {
    padding: 2.4rem 0;
  }
`;

export const PostDetails = styled.div`
  display: flex;
  font-size: 1.4rem;
  line-height: 1.6rem;

  width: 100%;
`;

export const Name = styled.span.attrs(() => ({
  className: 'comments-name',
}))`
  font-weight: bold;
`;

export const TimePosted = styled.span.attrs(() => ({
  className: 'comments-time-posted',
}))`
  color: var(--blue__opaque);
`;

export const VerticalDivider = styled.span.attrs(() => ({
  className: 'comments-vertical-divider',
}))`
  font-weight: normal;
  margin: 0 1rem;
`;

export const Text = styled.div.attrs(() => ({
  className: 'comments-text',
}))`
  font-size: 1.6rem;
  line-height: 2.2rem;
`;

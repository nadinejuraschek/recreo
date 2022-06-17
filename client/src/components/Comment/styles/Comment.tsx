// DEPENDENCIES
import styled from 'styled-components';

export const Container = styled.div.attrs(() => ({
  className: 'comments-item',
}))`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  background-color: var(--white__off);
  border-radius: 0.8rem;
  box-shadow: 0 2px 6px var(--shadow__sm);
  margin-bottom: 1rem;
  padding: 2rem;

  @media only screen and (min-width: 900px) {
    padding: 2.4rem;
  }
`;

export const Header = styled.div.attrs(() => ({
  className: 'comments-header',
}))`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const TextContainer = styled.div.attrs(() => ({
  className: 'comments-text',
}))`
  font-size: 1.6rem;
  line-height: 2.2rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const PostDetails = styled.div`
  display: flex;
  font-size: 1.4rem;
  line-height: 1.6rem;

  width: 100%;
`;

export const VerticalDivider = styled.span.attrs(() => ({
  className: 'comments-vertical-divider',
}))`
  font-weight: normal;
  margin: 0 1rem;
`;

export const Name = styled.span.attrs(() => ({
  className: 'comments-name',
}))`
  font-weight: bold;
`;

export const TimePosted = styled.span.attrs(() => ({
  className: 'comments-time-posted',
}))`
  color: var(--blue__medium);
`;

export const ReadMore = styled.span.attrs(() => ({
  className: 'comments-read-more',
}))`
  align-self: flex-end;
  color: var(--orange);
  cursor: pointer;
  font-size: 1.4rem;

  &:hover {
    text-decoration: underline;
  }

  @media only screen and (min-width: 900px) {
    align-self: flex-start;
  }
`;

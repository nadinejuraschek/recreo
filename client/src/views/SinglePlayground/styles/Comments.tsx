// DEPENDENCIES
import styled from 'styled-components';

export const Container = styled.div.attrs(() => ({
  className: 'single-playground__comments-container',
}))`
  grid-row: 1 / 2;

  height: 100%;
`;

export const SummaryContainer = styled.div.attrs(() => ({
  className: 'single-playground__comments-summary',
}))`
  padding: 4rem 0 2rem;
`;

export const Avatar = styled.div.attrs(() => ({
  className: 'single-playground__comments-avatar',
}))``;

export const FormContainer = styled.div.attrs(() => ({
  className: 'single-playground__comments-form',
}))`
  margin-bottom: 3rem;
  @media only screen and (min-width: 900px) {
  }
`;

export const RaterWrapper = styled.div.attrs(() => ({
  className: 'comment-form-rating-wrapper',
}))`
  display: flex;
  align-items: center;

  padding: 2rem 0 1rem;

  width: 100%;
`;

export const RaterLabel = styled.span.attrs(() => ({
  className: 'comment-form-rating-label',
}))`
  font-size: 1.6rem;
  margin-right: 1.5rem;
`;

export const ButtonWrapper = styled.div.attrs(() => ({
  className: 'comment-form-button-wrapper',
}))`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
`;

export const EmptyComments = styled.div.attrs(() => ({
  className: 'single-playground__comments-empty',
}))`
  font-size: 1.8rem;
  margin: 2.4rem 0;
`;

export const Name = styled.div.attrs(() => ({
  className: 'single-playground__comments-name',
}))``;

export const TimePosted = styled.div.attrs(() => ({
  className: 'single-playground__comments-time-posted',
}))``;

export const Text = styled.div.attrs(() => ({
  className: 'single-playground__comments-text',
}))``;

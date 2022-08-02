// DEPENDENCIES
import styled from 'styled-components';

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

export const Name = styled.div.attrs(() => ({
  className: 'single-playground__comments-name',
}))``;

export const TimePosted = styled.div.attrs(() => ({
  className: 'single-playground__comments-time-posted',
}))``;

export const Text = styled.div.attrs(() => ({
  className: 'single-playground__comments-text',
}))``;

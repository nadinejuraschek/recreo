// DEPENDENCIES
import styled from 'styled-components';

export const Container = styled.div.attrs(() => ({
  className: 'single-playground__comments-container',
}))`
  grid-row: 1 / 2;

  height: 100%;
`;

export const Avatar = styled.div.attrs(() => ({
  className: 'single-playground__comments-avatar',
}))``;

export const FormContainer = styled.div.attrs(() => ({
  className: 'single-playground__comments-form',
}))`
  @media only screen and (min-width: 900px) {
  }
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

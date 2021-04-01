// DEPENDENCIES
import styled from 'styled-components';

export const Container = styled.form.attrs(() => ({
  className: 'form',
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Rating = styled.div.attrs(() => ({
  className: 'comment-rating',
}))`
  font-size: 2rem;
  padding-top: 1rem;
  width: 100%;
`;

export const ButtonWrapper = styled.div.attrs(() => ({
  className: 'comment-button-wrapper',
}))`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
`;

// DEPENDENCIES
import styled, { css } from 'styled-components';

type InputProps = {
  withIcon: boolean;
};

export const Container = styled.div.attrs(() => ({
  className: 'input-container',
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 1rem 0;
  width: 100%;
`;

export const Wrapper = styled.div.attrs(() => ({
  className: 'input-wrapper',
}))`
  position: relative;
  width: 100%;
`;

export const Label = styled.label.attrs(() => ({
  className: 'input-label',
}))`
  font-size: 1.6rem;
  font-weight: bold;
`;

export const Icon = styled.img.attrs(() => ({
  className: 'input-icon',
}))`
  position: absolute;
  margin-left: 1rem;
  margin-top: 1rem;

  @media only screen and (min-width: 900px) {
    margin-top: 1.5rem;
  }

  object-fit: contain;
  height: 2rem;
  width: 2rem;
`;

export const StyledInput = styled.input.attrs(() => ({
  className: 'input',
}))<InputProps>`
  background-color: #f8f8f880;
  border: none;
  border-radius: 8px 8px 0 0;
  box-shadow: 0 0.0625rem 0.125rem #00000015;
  font-size: 1.6rem;
  font-weight: normal;
  margin-bottom: 0.75rem;
  padding-left: ${({ withIcon }) => (withIcon ? '4rem' : '0.75rem')};

  height: 40px;
  width: 100%;

  @media only screen and (min-width: 900px) {
    height: 50px;
  }

  &::placeholder {
    color: var(--blue__medium);
  }

  &:focus {
    border-bottom: 3px solid var(--yellow);
    outline: none;
  }
`;

export const StyledTextarea = styled.input.attrs(() => ({
  className: 'textarea',
}))`
  background-color: #f8f8f880;
  border: none;
  border-radius: 8px 8px 0 0;
  box-shadow: 0 0.0625rem 0.125rem #00000015;
  font-size: 1.6rem;
  font-weight: normal;
  margin-bottom: 0.75rem;
  padding: 0 0 0 0.75rem;

  height: 12rem;

  @media only screen and (min-width: 900px) {
    height: 12rem;
  }

  &::placeholder {
    color: var(--blue__medium);
  }

  &:focus {
    border-bottom: 3px solid var(--yellow);
    outline: none;
  }
`;

export const Validation = styled.div.attrs(() => ({
  className: 'input-validation',
}))`
  color: var(--red);
  font-size: 1rem;
`;

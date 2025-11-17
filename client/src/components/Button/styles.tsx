import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { ButtonProps } from './types';

const buttonBase = css<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  border-radius: 0.8rem;
  font-weight: 700;
  padding: 1rem 1.75rem;
  min-height: 5rem;
  min-width: 12rem;
  text-decoration: none;
  transition: all 0.2s ease;

  @media only screen and (min-width: 768px) {
    font-size: 1.8rem;
    padding: 1rem 2.25rem;
    min-width: 14rem;
  }

  @media only screen and (min-width: 900px) {
    font-size: 2rem;
    min-height: 6rem;
    padding: 1rem 3rem;
    min-width: 16rem;
  }

  ${({ $small }) =>
    $small &&
    css`
      font-size: 1.4rem;
      padding: 0.5rem 1rem;
      min-height: 4rem;
      min-width: 100px;

      @media only screen and (min-width: 900px) {
        font-size: 1.6rem;
      }
    `}

  ${({ $filled }) =>
    $filled &&
    css`
      background-color: var(--orange);
      border: 2px solid var(--orange);
      color: var(--white);
      box-shadow: none;
    `}

  ${({ $outlined }) =>
    $outlined &&
    css`
      background-color: var(--white);
      border: 2px solid var(--orange);
      color: var(--orange);
    `}

  ${({ $rounded }) =>
    $rounded &&
    css`
      border-radius: 40px;
    `}

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}

  ${({ $underlined }) =>
    $underlined &&
    css`
      background-color: transparent;
      border: none;
      color: var(--orange);
      font-size: 1.4rem;
      min-height: auto;
      text-decoration: underline;
    `}

  &:hover {
    ${({ $underlined }) =>
      !$underlined &&
      css`
        box-shadow: 0 3px 8px var(--shadow__lg);
      `}
  }

  &:focus-visible {
    outline: 3px solid rgba(255, 165, 0, 0.25);
    outline-offset: 2px;
  }
`;

export const StyledLink = styled(Link)<ButtonProps>`
  ${buttonBase}

  display: inline-flex;

  &[aria-disabled='true'] {
    opacity: 0.4;
    pointer-events: none;
    cursor: not-allowed;
  }

  ${({ $underlined }) =>
    $underlined &&
    css`
      height: auto;
      padding: 0;
    `}
`;

export const StyledButton = styled.button<ButtonProps>`
  ${buttonBase}

  border-radius: 0.5rem;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

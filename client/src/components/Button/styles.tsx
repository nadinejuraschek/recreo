// DEPENDENCIES
import styled, { css } from 'styled-components';

// COMPONENTS
import { Link } from 'react-router-dom';

type ButtonProps = {
  $disabled?: boolean;
  $filled?: boolean;
  $fullWidth?: boolean;
  $outlined?: boolean;
  $rounded?: boolean;
  $small?: boolean;
  $underlined?: boolean;
};

export const StyledLink = styled(Link).attrs(() => ({
  className: 'button-link',
}))<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.8rem;
  font-size: 1.6rem;
  font-weight: 700;
  padding: 1rem 1.75rem;
  text-decoration: none;

  height: 5rem;
  min-width: 12rem;

  transition: all 0.3s;

  @media only screen and (min-width: 768px) {
    font-size: 1.8rem;
    padding: 1rem 2.25rem;
    min-width: 14rem;
  }

  @media only screen and (min-width: 900px) {
    font-size: 2rem;
    height: 6rem;
    padding: 1rem 3rem;
    min-width: 16rem;
  }

  ${({ $small }) =>
    $small &&
    css`
      font-size: 1.6rem;
      height: 4rem;
      min-width: 12rem;
    `}

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.4;
    `}

  ${({ $filled }) =>
    $filled &&
    css`
      background-color: var(--orange);
      border: 2px solid var(--orange);
      color: var(--white);
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
      height: auto;
      text-decoration: underline;

      @media only screen and (min-width: 900px) {
        font-size: 1.6rem;
      }
    `}

  &:focus {
    ${({ $underlined }) =>
      $underlined &&
      css`
        outline: none;
      `}
  }

  &:hover {
    cursor: pointer;

    ${({ $disabled }) =>
      $disabled &&
      css`
        cursor: not-allowed;
      `}

    ${({ $filled }) =>
      $filled &&
      css`
        box-shadow: 0 3px 8px var(--shadow__lg);
        color: var(--white);
      `}

    ${({ $outlined }) =>
      $outlined &&
      css`
        box-shadow: 0 3px 8px var(--shadow__lg);
        color: var(--orange);
      `}

    ${({ $underlined }) =>
      $underlined &&
      css`
        box-shadow: none;
      `}
  }
`;

export const StyledButton = styled.button.attrs(() => ({
  className: 'button',
}))<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.5rem;
  font-size: 1.6rem;
  font-weight: 700;
  padding: 1rem 1.75rem;

  height: 5rem;
  min-width: 12rem;

  transition: all 0.3s;

  @media only screen and (min-width: 768px) {
    font-size: 1.8rem;
    padding: 1rem 2.25rem;
    min-width: 14rem;
  }

  @media only screen and (min-width: 900px) {
    font-size: 2rem;
    height: 6rem;
    padding: 1rem 3rem;
    min-width: 16rem;
  }

  ${({ $small }) =>
    $small &&
    css`
      font-size: 1.4rem;
      padding: 0.5rem 1rem;

      height: 4rem;
      min-width: 100px;

      @media only screen and (min-width: 900px) {
        font-size: 1.6rem;
        padding: 0.5rem 1rem;

        height: 4rem;
        min-width: 100px;
      }
    `}

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.4;
    `}

  ${({ $filled }) =>
    $filled &&
    css`
      background-color: var(--orange);
      border: 2px solid var(--orange);
      color: var(--white);
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
      height: auto;
      text-decoration: underline;

      @media only screen and (min-width: 900px) {
        font-size: 1.6rem;
      }
    `}

  &:focus {
    ${({ $underlined }) =>
      $underlined &&
      css`
        outline: none;
      `}
  }

  &:hover {
    cursor: pointer;

    ${({ $disabled }) =>
      $disabled &&
      css`
        cursor: not-allowed;
      `}

    ${({ $filled }) =>
      $filled &&
      css`
        box-shadow: 3px 3px 6px var(--shadow__lg);
        transform: translateX(-2px) translateY(-2px);
      `}

    ${({ $outlined }) =>
      $outlined &&
      css`
        box-shadow: 3px 3px 6px var(--shadow__lg);
        transform: translateX(-2px) translateY(-2px);
      `}

    ${({ $underlined }) =>
      $underlined &&
      css`
        box-shadow: none;
      `}
  }
`;

import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledButtonProps } from './types';

const buttonBase = css<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  cursor: pointer;

  font-size: 1.6rem;
  border-radius: 0.8rem;
  font-weight: 700;
  padding: 1rem 1.75rem;
  min-height: 4rem;
  min-width: 12rem;
  max-width: 20rem;
  text-decoration: none;
  transition: all 0.2s ease;

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      min-width: unset;
      max-width: unset;
      width: 100%;
    `}

  ${({ $variant }) => {
    if ($variant === 'secondary') {
      return css`
        background-color: var(--white);
        border: 1px solid var(--orange_500);
        color: var(--orange_500);

        &:hover {
          border-color: var(--orange_600);
          color: var(--orange_600);
        }
      `;
    }

    if ($variant === 'tertiary') {
      return css`
        background-color: transparent;
        border: 1px solid transparent;
        font-weight: 400;

        &:hover {
          background-color: var(--orange_50);
          border-color: var(--orange_50);
        }
      `;
    }

    return css`
      background-color: var(--orange_500);
      border: 1px solid var(--orange_500);
      color: var(--white);

      &:hover {
        background-color: var(--orange_600);
        border-color: var(--orange_600);
      }
    `;
  }}

  &:focus, &:focus-visible {
    outline: 4px solid var(--orange_200);
  }
`;

export const StyledLink = styled(Link)<StyledButtonProps>`
  ${buttonBase}

  display: inline-flex;

  &[aria-disabled='true'] {
    opacity: 0.4;
    pointer-events: none;
    cursor: not-allowed;
  }
`;

export const StyledButton = styled.button<StyledButtonProps>`
  ${buttonBase}

  border-radius: 0.5rem;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

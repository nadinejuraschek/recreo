// DEPENDENCIES
import styled, { css } from 'styled-components';

// COMPONENTS
import { Link } from 'react-router-dom';

type ButtonProps = {
  disabled?: boolean;
  filled?: boolean;
  fullWidth?: boolean;
  outlined?: boolean;
  rounded?: boolean;
};

export const StyledLink = styled(Link).attrs(() => ({
  className: 'button-link',
}))<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  padding: 0.5rem 1rem;
  text-decoration: none;

  height: 40px;
  min-width: 120px;

  transition: all 0.3s;

  @media only screen and (min-width: 900px) {
    font-size: 1.25rem;
    height: 50px;
    min-width: 140px;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.4;
    `}

  ${({ filled }) =>
    filled &&
    css`
      background-color: var(--orange);
      border: 2px solid var(--orange);
      color: var(--white);
    `}

  ${({ outlined }) =>
    outlined &&
    css`
      background-color: var(--white);
      border: 2px solid var(--orange);
      color: var(--orange);
    `}

  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 40px;
    `}

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  &:hover {
    cursor: pointer;

    ${({ disabled }) =>
      disabled &&
      css`
        cursor: not-allowed;
      `}

    ${({ filled }) =>
      filled &&
      css`
        box-shadow: 3px 3px 6px var(--shadow__lg);
        color: var(--white);
        transform: translateX(-2px) translateY(-2px);
      `}

    ${({ outlined }) =>
      outlined &&
      css`
        box-shadow: 3px 3px 6px var(--shadow__lg);
        color: var(--orange);
        transform: translateX(-2px) translateY(-2px);
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
  font-size: 1.1rem;
  font-weight: 700;
  padding: 0.5rem 1rem;

  height: 40px;
  min-width: 120px;

  transition: all 0.3s;

  @media only screen and (min-width: 900px) {
    font-size: 1.25rem;
    height: 50px;
    min-width: 140px;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.4;
    `}

  ${({ filled }) =>
    filled &&
    css`
      background-color: var(--orange);
      border: 2px solid var(--orange);
      color: var(--white);
    `}

  ${({ outlined }) =>
    outlined &&
    css`
      background-color: var(--white);
      border: 2px solid var(--orange);
      color: var(--orange);
    `}

  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 40px;
    `}

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  &:hover {
    cursor: pointer;

    ${({ disabled }) =>
      disabled &&
      css`
        cursor: not-allowed;
      `}

    ${({ filled }) =>
      filled &&
      css`
        box-shadow: 3px 3px 6px var(--shadow__lg);
        transform: translateX(-2px) translateY(-2px);
      `}

    ${({ outlined }) =>
      outlined &&
      css`
        box-shadow: 3px 3px 6px var(--shadow__lg);
        transform: translateX(-2px) translateY(-2px);
      `}
  }
`;

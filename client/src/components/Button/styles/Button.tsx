// DEPENDENCIES
import styled, { css } from 'styled-components';

type ButtonProps = {
  disabled?: boolean;
  filled?: boolean;
  fullWidth?: boolean;
  outlined?: boolean;
  rounded?: boolean;
};

export const Link = styled.a.attrs(() => ({
  className: 'button-link',
}))<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  padding: 0.5rem 1rem;
  text-transform: none;

  height: 50px;
  min-width: 140px;

  transition: all 0.3s;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.4;
    `}

  ${({ filled }) =>
    filled &&
    css`
      background-color: #e07a5f;
      border: 2px solid #e07a5f;
      color: #ffffff;
    `}

  ${({ outlined }) =>
    outlined &&
    css`
      background-color: #ffffff;
      border: 2px solid #e07a5f;
      color: #e07a5f;
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
        box-shadow: 3px 3px 6px #00000025;
        transform: translateX(-2px) translateY(-2px);
      `}

    ${({ outlined }) =>
      outlined &&
      css`
        box-shadow: 3px 3px 6px #00000025;
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
  font-size: 1.25rem;
  font-weight: 700;
  padding: 0.5rem 1rem;
  text-transform: none;

  height: 50px;
  min-width: 140px;

  transition: all 0.3s;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.4;
    `}

  ${({ filled }) =>
    filled &&
    css`
      background-color: #e07a5f;
      border: 2px solid #e07a5f;
      color: #ffffff;
    `}

  ${({ outlined }) =>
    outlined &&
    css`
      background-color: #ffffff;
      border: 2px solid #e07a5f;
      color: #e07a5f;
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
        box-shadow: 3px 3px 6px #00000025;
        transform: translateX(-2px) translateY(-2px);
      `}

    ${({ outlined }) =>
      outlined &&
      css`
        box-shadow: 3px 3px 6px #00000025;
        transform: translateX(-2px) translateY(-2px);
      `}
  }
`;

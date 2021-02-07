// DEPENDENCIES
import styled, { css } from 'styled-components';

export const Link = styled.a.attrs(() => ({
  className: 'button-link',
}))`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #E07A5F;
  border-radius: 0.3rem;
  font-size: 1.25rem;
  font-weight: 700 !important;
  padding: .5rem 1rem;
  text-transform: none;

  height: 60px;
`;

export const StyledButton = styled.button.attrs(() => ({
  className: 'button',
}))`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 3px solid #E07A5F;
  border-radius: 0.3rem;
  font-size: 1.25rem;
  font-weight: 700 !important;
  padding: .5rem 1rem;
  text-transform: none;

  height: 60px;


  ${({primary}) => primary && css`
    background-color: #E07A5F;
    color: #FFFFFF;
  `}

  ${({secondary}) => secondary && css`
  `}

  ${({outlined}) => outlined && css`
    background-color: #FFFFFF;
    color: #E07A5F;
  `}

  ${({rounded}) => rounded && css`
    border-radius: 40px;
  `}

  ${({fullWidth}) => fullWidth && css`
    width: 100%;
  `}
`;
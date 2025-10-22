// DEPENDENCIES
import styled from 'styled-components';

// INTERFACES
import { StyledInputProps } from './types';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 1rem 0 2rem;
  width: 100%;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
`;

export const Icon = styled.img`
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

export const StyledInput = styled.input<StyledInputProps>`
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

export const StyledTextarea = styled.textarea`
  background-color: #f8f8f880;
  border: none;
  border-radius: 8px 8px 0 0;
  box-shadow: 0 0.0625rem 0.125rem #00000015;
  font-size: 1.6rem;
  font-weight: normal;
  margin-bottom: 0.75rem;
  padding: 1.5rem 0.75rem 0.75rem;

  &::placeholder {
    color: var(--blue__medium);
  }

  &:focus {
    border-bottom: 3px solid var(--yellow);
    outline: none;
  }
`;

export const Validation = styled.div`
  color: var(--red);
  font-size: 1rem;
`;

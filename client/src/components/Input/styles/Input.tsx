// DEPENDENCIES
import styled from 'styled-components';

export const Wrapper = styled.div.attrs(() => ({
  className: 'input-wrapper',
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Label = styled.label.attrs(() => ({
  className: 'input-label',
}))``;

export const StyledInput = styled.input.attrs(() => ({
  className: 'input',
}))`
  margin: 0.75rem 0;
`;

export const Validation = styled.div.attrs(() => ({
  className: 'input-validation',
}))``;

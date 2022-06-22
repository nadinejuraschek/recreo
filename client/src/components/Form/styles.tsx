// DEPENDENCIES
import styled from 'styled-components';

export const Container = styled.form.attrs(() => ({
  className: 'form',
}))<{ alignLeft: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ alignLeft }) => (alignLeft ? 'flex-start' : 'center')};
`;

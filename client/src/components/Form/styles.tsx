import { ReactNode } from 'react';
import styled from 'styled-components';

export const Container = styled.form<{ alignLeft: boolean; children: ReactNode; onSubmit: () => void }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ alignLeft }) => (alignLeft ? 'flex-start' : 'center')};
`;

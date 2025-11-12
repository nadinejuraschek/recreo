// DEPENDENCIES
import { ReactNode } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 0.5rem 0;
`;

export const IconWrapper = styled.div<{ children: ReactNode; small: boolean }>`
  background-color: var(--orange__opaque);
  border-radius: 0.8rem;
  margin-right: 1rem;
  padding: ${({ small }) => (small ? '0.5rem' : '0.75rem')};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.div<{ children: ReactNode; small: boolean }>`
  color: var(--orange);
  height: ${({ small }) => (small ? '2rem' : '3.5rem')};
  width: ${({ small }) => (small ? '2rem' : '3.5rem')};

  svg {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
`;

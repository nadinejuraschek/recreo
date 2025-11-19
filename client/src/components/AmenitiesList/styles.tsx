import { ReactNode } from 'react';
import styled from 'styled-components';

export const ListWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const List = styled.div<{ children: ReactNode; small: boolean }>`
  font-size: 1.4rem;
  margin-top: ${({ small }) => (small ? '0' : '1rem')};
  width: ${({ small }) => (small ? '16rem' : 'auto')};

  display: grid;
  grid-template-columns: ${({ small }) => (small ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)')};
`;

export const MoreText = styled.div`
  font-size: 1.6rem;
`;

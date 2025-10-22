// DEPENDENCIES
import { ReactNode } from 'react';
import styled from 'styled-components';

export const Main = styled.main<{ children: ReactNode; withMainPadding: boolean }>`
  min-height: calc(100vh - 8rem);
  margin: 0 auto;
  max-width: 140rem;

  padding: ${({ withMainPadding }) => (withMainPadding ? '2.4rem' : '0')};

  @media only screen and (min-width: 900px) {
    min-height: calc(100vh - 11rem);
    padding: ${({ withMainPadding }) => (withMainPadding ? '4rem' : '0')};
  }
`;

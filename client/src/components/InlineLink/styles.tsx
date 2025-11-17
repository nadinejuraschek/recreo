import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

export const InAppLink = styled(Link)<{ to: string }>`
  color: var(--orange);
  font-family: inherit;
  font-size: inherit;
  font-weight: normal;
  text-decoration: none;

  &:hover {
    color: var(--orange);
    font-weight: bold;
  }
`;

export const ExternalLink = styled.a<{ children: ReactNode; href?: string; target?: string }>`
  color: var(--orange);
  font-family: inherit;
  font-size: inherit;
  font-weight: normal;
  text-decoration: none;

  &:hover {
    color: var(--orange);
    font-weight: bold;
  }
`;

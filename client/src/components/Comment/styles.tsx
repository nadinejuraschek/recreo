import { ReactNode } from 'react';
import styled from 'styled-components';

export const Container = styled.div<{ className?: string; children: ReactNode }>`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  background-color: var(--white__off);
  border-radius: 0.8rem;
  box-shadow: 0 2px 6px var(--shadow__sm);
  margin-bottom: 1rem;
  padding: 2rem;

  @media only screen and (min-width: 900px) {
    padding: 2.4rem;
  }
`;

export const Header = styled.div<{ className?: string; children: ReactNode }>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const TextContainer = styled.div<{ className?: string; children: ReactNode }>`
  font-size: 1.6rem;
  line-height: 2.2rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const PostDetails = styled.div<{ className?: string; children: ReactNode }>`
  display: flex;
  font-size: 1.4rem;
  line-height: 1.6rem;

  width: 100%;
`;

export const VerticalDivider = styled.span<{ className?: string; children: ReactNode }>`
  font-weight: normal;
  margin: 0 1rem;
`;

export const Name = styled.span<{ className?: string; children: ReactNode }>`
  font-weight: bold;
`;

export const TimePosted = styled.span<{ className?: string; children: ReactNode }>`
  color: var(--blue_500);
`;

export const ReadMore = styled.span<{ children: ReactNode; className?: string; onClick: () => void }>`
  align-self: flex-end;
  color: var(--orange_500);
  cursor: pointer;
  font-size: 1.4rem;

  &:hover {
    text-decoration: underline;
  }

  @media only screen and (min-width: 900px) {
    align-self: flex-start;
  }
`;

import styled from 'styled-components';

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  height: 24rem;
  width: 100%;

  p {
    color: var(--blue_700);
    font-size: 2rem;
    font-weight: normal;
    margin-bottom: 2rem;
    text-align: center;

    @media only screen and (min-width: 768px) {
      font-size: 2.2rem;
    }
  }
`;

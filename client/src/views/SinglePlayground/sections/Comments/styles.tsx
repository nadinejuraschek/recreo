import { Title } from 'components';
import styled from 'styled-components';

export const Container = styled.div`
  grid-row: 1 / 2;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  height: 100%;
`;

export const StyledTitle = styled(Title)`
  padding: 2.4rem 0;
  margin: 0;
`;

export const EmptyComments = styled.div`
  font-size: 1.8rem;
  margin: 2.4rem 0;
`;

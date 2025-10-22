// DEPENDENCIES
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  grid-row: 1 / 2;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100%;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  height: 100%;

  .back-button__wrapper {
    position: relative;
    left: -6px;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;

  height: 100%;

  .favorite-icon {
    margin-right: 1.5rem;
  }
`;

export const HeaderTitle = styled.h3`
  font-size: 3rem;
  font-weight: bold;
  margin-left: 1rem;
`;

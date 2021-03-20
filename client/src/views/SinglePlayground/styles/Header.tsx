// DEPENDENCIES
import styled from 'styled-components';

export const HeaderWrapper = styled.div.attrs(() => ({
  className: 'single-playground__header',
}))`
  grid-row: 1 / 2;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100%;
`;

export const HeaderLeft = styled.div.attrs(() => ({
  className: 'single-playground__header-left',
}))`
  display: flex;
  align-items: center;

  height: 100%;

  .back-button__wrapper {
    position: relative;
    left: -6px;
  }
`;

export const HeaderRight = styled.div.attrs(() => ({
  className: 'single-playground__header-right',
}))`
  display: flex;
  align-items: center;

  height: 100%;
`;

export const HeaderTitle = styled.h3.attrs(() => ({
  className: 'single-playground__header-title',
}))`
  font-size: 3rem;
  font-weight: bold;
  margin-left: 1rem;
`;

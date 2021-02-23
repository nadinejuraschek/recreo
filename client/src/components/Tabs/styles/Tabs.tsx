// DEPENDENCIES
import styled from 'styled-components';

export const Container = styled.div.attrs(() => ({
  className: 'tabs-container',
}))`
  display: flex;
  align-items: center;
`;

export const Tab = styled.button.attrs(() => ({
  className: 'tabs-button',
}))`
  background-color: lightblue;
  width: 12rem;
`;

// DEPENDENCIES
import styled from 'styled-components';

// ICONS
import { ReactComponent as ArrowLeft } from 'assets/arrow-left.svg';

export const Wrapper = styled.button.attrs(() => ({
  className: 'back-button__wrapper',
}))`
  display: flex;
  align-items: center;

  border: none;
  background-color: transparent;
  color: var(--blue__dark);

  height: 2rem;
  width: 14rem;

  &:hover {
    color: var(--orange);
    cursor: pointer;
  }
`;

export const Icon = styled(ArrowLeft).attrs(() => ({
  className: 'back-button__icon',
}))`
  height: 2rem;
  width: 2rem;

  &:hover {
    cursor: pointer;
  }
`;

export const Label = styled.label.attrs(() => ({
  className: 'back-button__label',
}))`
  font-size: 1.6rem;
  font-weight: 600;
  margin-left: 1.25rem;

  &:hover {
    cursor: pointer;
  }
`;

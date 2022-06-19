// DEPENDENCIES
import styled from 'styled-components';

export const Wrapper = styled.div.attrs(() => ({
  className: 'home-wrapper',
}))`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 4vh;

  height: 100%;
  width: 100%;

  @media only screen and (min-width: 550px) {
    margin-top: unset;

    height: 50vh;

    justify-content: center;
  }

  @media only screen and (min-width: 768px) {
    align-items: flex-start;

    height: 100%;
    width: 40%;
  }

  @media only screen and (min-width: 900px) {
    width: 100%;
  }
`;

export const HomeTitle = styled.h1.attrs(() => ({
  className: 'home-title',
}))`
  font-size: 5.5rem;
  line-height: 1.25;
  margin-bottom: 4rem;

  @media only screen and (min-width: 550px) {
    font-size: 5.5rem;

    text-align: center;

    width: 80%;
  }

  @media only screen and (min-width: 768px) {
    text-align: left;

    width: unset;
  }

  @media only screen and (min-width: 900px) {
    font-size: 5.5rem;
    margin-bottom: 8rem;
  }
`;

export const Highlighted = styled.span.attrs(() => ({
  className: 'home-title-highlighted',
}))`
  position: relative;

  &::after {
    display: block;
    content: '';

    position: absolute;
    bottom: 4px;

    height: 25%;
    width: 100%;

    background: var(--yellow);
    transform: skew(-16deg);
    z-index: -1;
  }

  @media only screen and (min-width: 550px) and (max-width: 768px) {
    &::after {
      display: none;
    }
  }

  @media only screen and (min-width: 768px) {
    &::after {
      display: block;
    }
  }
`;

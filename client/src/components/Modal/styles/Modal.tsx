// DEPENDENCIES
import styled from 'styled-components';

export const Overlay = styled.div.attrs(() => ({
  className: 'modal-overlay',
}))`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;
  z-index: 2;

  background-color: var(--blue__overlay);
`;

export const Container = styled.div.attrs(() => ({
  className: 'modal-container',
}))`
  background-color: var(--white);
  border: none;
  border-radius: 2.4rem;
  box-shadow: 0 2px 6px var(--shadow__sm);

  display: flex;
  flex-direction: column;

  width: 90vw;

  @media only screen and (min-width: 768px) {
    width: 70vw;
  }

  @media only screen and (min-width: 900px) {
    width: 60vw;
  }
`;

export const Body = styled.div.attrs(() => ({
  className: 'modal-body',
}))`
  height: 100%;
`;

export const Footer = styled.div.attrs(() => ({
  className: 'modal-footer',
}))`
  height: 8rem;
  padding: 0 2.4rem;
`;

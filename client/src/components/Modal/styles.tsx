// DEPENDENCIES
import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 2;

  background-color: var(--blue__overlay);
`;

export const Container = styled.div`
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

export const Body = styled.div`
  height: 100%;
  padding: 0;
`;

export const Footer = styled.div`
  border: none;
  height: 8rem;
  padding: 0 2.4rem;
`;

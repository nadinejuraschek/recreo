// DEPENDENCIES
import styled from 'styled-components';

export const HorizontalImage = styled.div`
  position: absolute;
  bottom: 0;

  height: 34%;
  width: 100vw;
  z-index: -2;

  background-image: linear-gradient(#ffffff40, #ffffff40),
    url('https://images.unsplash.com/photo-1552537595-b30edb7afd9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80');
  background-size: cover;
  background-position: center 25%;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const HorizontalWave = styled.div`
  position: absolute;
  bottom: 0;

  height: 35%;
  width: 100vw;
  z-index: -2;

  & img {
    object-fit: cover;
    width: 100%;
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const VerticalImage = styled.div`
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;

  height: 100vh;
  width: 60vw;
  z-index: -2;

  background-image: linear-gradient(#ffffff40, #ffffff40),
    url('https://images.unsplash.com/photo-1552537595-b30edb7afd9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80');
  background-position: center 35%;

  @media only screen and (min-width: 768px) {
    display: block;
  }
`;

export const VerticalWave = styled.div`
  display: none;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 38vw;

  height: 100vh;
  z-index: -1;

  & img {
    object-fit: cover;
    height: 100%;
  }

  @media only screen and (min-width: 768px) {
    display: block;
  }
`;

export const Main = styled.main`
  // max-height: 55%;
  max-width: 100%;
  height: calc(100vh - 8rem);

  padding: 2.4rem;

  @media only screen and (min-width: 900px) {
    // max-height: 100%;
    height: calc(100vh - 11rem);
    max-width: 40vw;

    padding: 4rem;
  }
`;

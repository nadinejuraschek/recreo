// DEPENDENCIES
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link).attrs(() => ({
  className: 'card-container',
}))`
  background-color: var(--white__off);
  border: none;
  border-radius: 0.8rem;
  box-shadow: 0 2px 6px var(--shadow__sm);
  color: var(--blue__dark);
  overflow: hidden;
  text-decoration: none;

  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;

  &:hover {
    box-shadow: 0 2px 10px var(--shadow__lg);
    color: var(--blue__dark);
    cursor: pointer;
  }

  @media only screen and (min-width: 600px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Image = styled.img.attrs(() => ({
  className: 'card-image',
}))`
  object-fit: cover;
  height: 10rem;
  width: 100%;

  @media only screen and (min-width: 600px) {
    height: 100%;
    width: 21rem;
  }
`;

export const Body = styled.div.attrs(() => ({
  className: 'card-body',
}))`
  padding: 2rem;

  @media only screen and (min-width: 600px) {
    height: 100%;
    margin: 0;
  }
`;

export const Headline = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.h3.attrs(() => ({
  className: 'card-name',
}))`
  font-size: 2rem;
  font-weight: bold;

  @media only screen and (min-width: 600px) {
    font-size: 2.25rem;
  }
`;

export const Location = styled.p.attrs(() => ({
  className: 'card-location',
}))`
  display: flex;
  align-items: center;

  font-size: 1.4rem;
  font-weight: 300;
  margin-bottom: 1rem;

  @media only screen and (min-width: 600px) {
    font-size: 1.6rem;
  }
`;

export const Amenities = styled.div.attrs(() => ({
  className: 'card-amenities',
}))`
  display: flex;
  align-items: center;

  height: 10rem;
`;

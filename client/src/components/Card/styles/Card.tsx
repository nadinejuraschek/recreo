// DEPENDENCIES
import styled from 'styled-components';

// ICONS
import { ReactComponent as LocationSvg } from 'assets/location.svg';
import { ReactComponent as RatingSvg } from 'assets/star.svg';

export const Container = styled.div.attrs(() => ({
  className: 'card-container',
}))`
  border: none;
  border-radius: 1.5rem;
  box-shadow: 0 2px 6px var(--shadow__sm);
  color: var(--blue__dark);
  padding: 1.2rem;

  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;

  &:hover {
    box-shadow: 0 2px 10px var(--shadow__lg);
  }

  @media only screen and (min-width: 600px) {
    flex-direction: row;
    align-items: center;
  }

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 900px) {
  }
`;

export const Image = styled.img.attrs(() => ({
  className: 'card-image',
}))`
  border: none;
  border-radius: 1.5rem;

  object-fit: cover;
  height: 10rem;
  width: 100%;

  @media only screen and (min-width: 600px) {
    height: 10rem;
    width: 10rem;
  }

  @media only screen and (min-width: 768px) {
    height: 100%;
    width: 35%;
  }
`;

export const Body = styled.div.attrs(() => ({
  className: 'card-body',
}))`
  margin-top: 1.2rem;
  padding: 0;

  @media only screen and (min-width: 600px) {
    height: 100%;
    margin-top: 0;
    margin-left: 1.2rem;
  }
`;

export const Distance = styled.p.attrs(() => ({
  className: 'card-distance',
}))`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const Name = styled.h3.attrs(() => ({
  className: 'card-name',
}))`
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;

export const Location = styled.p.attrs(() => ({
  className: 'card-location',
}))`
  display: flex;
  align-items: center;

  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 1rem;
`;

export const LocationIcon = styled(LocationSvg).attrs(() => ({
  className: 'card-location-icon',
}))`
  height: 1.5rem;
  width: 1.5rem;
  margin-right: 0.5rem;
`;

export const Rating = styled.p.attrs(() => ({
  className: 'card-rating',
}))`
  display: flex;
  align-items: center;

  font-size: 1.5rem;
`;

export const RatingIcon = styled(RatingSvg).attrs(() => ({
  className: 'card-rating-icon',
}))`
  color: var(--yellow);
  margin-right: 0.7rem;

  height: 2.25rem;
  width: 2.25rem;
`;

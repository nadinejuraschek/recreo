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
  padding: 1.2rem;

  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;

  height: 24rem;

  &:hover {
    box-shadow: 0 2px 10px var(--shadow__lg);
  }
`;

export const Image = styled.img.attrs(() => ({
  className: 'card-image',
}))`
  border: none;
  border-radius: 1.5rem;

  object-fit: cover;
  height: 12rem;
  width: 100%;
`;

export const Body = styled.div.attrs(() => ({
  className: 'card-body',
}))`
  height: 8.75rem;
  padding: 1rem 0;
`;

export const Title = styled.div.attrs(() => ({
  className: 'card-title',
}))`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Location = styled.div.attrs(() => ({
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

export const Rating = styled.div.attrs(() => ({
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

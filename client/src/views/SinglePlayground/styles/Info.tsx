// DEPENDENCIES
import styled from 'styled-components';

// ICONS
import { ReactComponent as PinIcon } from 'assets/location.svg';

export const Wrapper = styled.div.attrs(() => ({
  className: 'single-playground__info-wrapper',
}))`
  grid-row: 2 / 3;

  height: 100%;
  width: 100%;

  margin: 2rem 0;
`;

export const Subtitle = styled.div.attrs(() => ({
  className: 'single-playground__info-subtitle',
}))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;

  font-size: 1.8rem;
  line-height: 2rem;
  margin-bottom: 2rem;
`;

export const Location = styled.div.attrs(() => ({
  className: 'single-playground__info-location-icon',
}))`
  display: flex;
  align-items: center;
`;

export const LocationIcon = styled(PinIcon).attrs(() => ({
  className: 'single-playground__info-location-icon',
}))`
  height: 1.8rem;
  width: 1.8rem;

  margin-right: 1.5rem;
`;

export const Description = styled.p.attrs(() => ({
  className: 'single-playground__info-description',
}))`
  font-size: 1.6rem;
  line-height: 2.2rem;
`;

export const AmenitiesList = styled.div.attrs(() => ({
  className: 'single-playground__info-amenities-list',
}))`
  display: flex;
  align-items: center;

  margin: 1.5rem 0;

  .tooltip-wrapper:not(:last-child) {
    margin-right: 1rem;
  }
`;

// DEPENDENCIES
import styled from 'styled-components';

// ICONS
import { ReactComponent as PinIcon } from 'assets/location.svg';

export const Wrapper = styled.div.attrs(() => ({
  className: 'single-playground__info-wrapper',
}))`
  grid-row: 1 / 2;

  height: 100%;
`;

export const Subtitle = styled.h4.attrs(() => ({
  className: 'single-playground__info-subtitle',
}))`
  display: flex;
  align-items: center;

  font-size: 1.8rem;
  line-height: 2rem;
  margin: 1rem 0;
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
  line-height: 1.8rem;
  margin: 1.5rem 0;
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

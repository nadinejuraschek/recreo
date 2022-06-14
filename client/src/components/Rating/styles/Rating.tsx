// DEPENDENCIES
import styled from 'styled-components';

// ICONS
import { ReactComponent as RatingSvg } from 'assets/star.svg';

export const RatingWrapper = styled.p.attrs(() => ({
  className: 'card-rating',
}))`
  display: flex;
  align-items: center;

  font-size: 1.6rem;
  line-height: 2.25rem;
`;

export const RatingIcon = styled(RatingSvg).attrs(() => ({
  className: 'card-rating-icon',
}))`
  color: var(--yellow);
  margin-right: 0.7rem;

  height: 2.25rem;
  width: 2.25rem;
`;

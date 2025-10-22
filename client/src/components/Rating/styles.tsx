// DEPENDENCIES
import styled from 'styled-components';

// ICONS
import { ReactComponent as RatingSvg } from 'assets/star.svg';

export const NumberRating = styled.div`
  font-size: 1.6rem;
  line-height: 2.25rem;

  display: flex;
  align-items: center;
`;

export const RatingValue = styled.span`
  color: var(--blue__dark);
  font-weight: bold;
`;

export const RatingWrapper = styled.p`
  display: flex;
  align-items: center;

  font-size: 1.6rem;
  line-height: 2.25rem;

  svg:last-child {
    margin-right: 0;
  }
`;

export const RatingIcon = styled(RatingSvg)<{ color?: string }>`
  color: ${({ color }) => (color ? color : 'var(--yellow)')};
  margin-right: 0.7rem;

  height: 2.25rem;
  width: 2.25rem;
`;

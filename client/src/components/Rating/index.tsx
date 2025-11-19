import { NumberRating, RatingWrapper, RatingIcon, RatingValue } from './styles';
import { RatingProps } from './types';

export const Rating = ({ rating, withValue = false }: RatingProps) => {
  if (!rating) {
    return null;
  }

  const displayRating = () => {
    const roundedRating = Math.round(rating);
    return [...Array(roundedRating)].map((_element, index) => <RatingIcon key={index} />);
  };

  if (withValue) {
    return (
      <NumberRating>
        <RatingIcon />
        <RatingValue>{rating.toFixed(1)}</RatingValue>
      </NumberRating>
    );
  }

  return <RatingWrapper>{displayRating()}</RatingWrapper>;
};

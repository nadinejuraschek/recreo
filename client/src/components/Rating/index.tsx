// STYLED COMPONENTS
import { NumberRating, RatingWrapper, RatingIcon, RatingValue } from './styles/Rating';

// INTERFACES
import { RatingProps } from './types';

export const Rating = ({ rating = 0, withValue = false }: RatingProps): JSX.Element => {
  const displayRating = () => {
    const roundedRating = Math.round(rating);
    return [...Array(roundedRating)].map((element, index) => <RatingIcon key={index} />);
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

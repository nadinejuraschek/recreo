// STYLED COMPONENTS
import { RatingWrapper, RatingIcon } from './styles/Rating';

// INTERFACES
import { RatingProps } from './types';

const Rating = ({ rating = 0 }: RatingProps): JSX.Element => {
  const displayRating = () => {
    return [...Array(rating)].map((element, index) => <RatingIcon key={index} />);
  };

  return <RatingWrapper>{displayRating()}</RatingWrapper>;
};

export default Rating;

// STYLED COMPONENTS
import { Description, Location, LocationIcon, Subtitle, Wrapper } from '../../styles/Info';

// COMPONENTS
import { Rating } from 'components';

// INTERFACES
import { InfoProps } from '../../types';

export const Info = ({ description = '', location = '', rating }: InfoProps): JSX.Element => {
  return (
    <Wrapper>
      <Subtitle>
        <Location>
          <LocationIcon /> {location}, 18km
        </Location>
        {rating ? <Rating rating={rating} /> : null}
      </Subtitle>
      <Description>{description}</Description>
    </Wrapper>
  );
};

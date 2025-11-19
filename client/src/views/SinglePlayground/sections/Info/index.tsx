import { Description, Location, LocationIcon, Subtitle, Wrapper } from './styles';
import { Rating } from 'components';
import { InfoProps } from './types';

export const Info = ({ description = '', location = '', rating }: InfoProps): JSX.Element => (
  <Wrapper>
    <Subtitle>
      <Location>
        <LocationIcon /> {location} {/* TODO: distance? */}
      </Location>
      {rating ? <Rating rating={rating} withValue /> : null}
    </Subtitle>
    <Description>{description}</Description>
  </Wrapper>
);

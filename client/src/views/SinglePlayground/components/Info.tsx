// STYLED COMPONENTS
import { Description, Location, LocationIcon, Subtitle, Wrapper } from '../styles/Info';

// INTERFACES
import { InfoProps } from '../types';

const Info = ({ description = '', location = '', rating }: InfoProps): JSX.Element => {
  return (
    <Wrapper>
      <Subtitle>
        <Location>
          <LocationIcon /> {location}, 18km
        </Location>
        {rating ? '⭐⭐⭐⭐⭐' : null}
      </Subtitle>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default Info;

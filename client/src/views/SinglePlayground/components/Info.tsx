// STYLED COMPONENTS
import { Description, Location, LocationIcon, Subtitle, Wrapper } from '../styles/Info';

const Info = (): JSX.Element => {
  return (
    <Wrapper>
      <Subtitle>
        <Location>
          <LocationIcon /> Austin, 18km
        </Location>
        ⭐⭐⭐⭐⭐
      </Subtitle>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor, consectetur
        adipiscing elit, sed do eiusmod temp.
      </Description>
    </Wrapper>
  );
};

export default Info;

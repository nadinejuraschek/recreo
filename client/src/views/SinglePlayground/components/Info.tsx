// STYLED COMPONENTS
import { Description, Location, LocationIcon, Subtitle, Wrapper } from '../styles/Info';

const Info = () => {
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
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est laborum.
      </Description>
    </Wrapper>
  );
};

export default Info;

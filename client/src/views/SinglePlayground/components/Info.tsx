// COMPONENTS
import Amenity from 'components/Amenity';

// STYLED COMPONENTS
import { AmenitiesList, Description, LocationIcon, Subtitle, Wrapper } from '../styles/Info';

const Info = () => {
  return (
    <Wrapper>
      <Subtitle>
        <LocationIcon /> Austin, 18km
      </Subtitle>
      <Subtitle>⭐⭐⭐⭐⭐</Subtitle>
      <AmenitiesList>
        <Amenity />
        <Amenity />
        <Amenity />
        <Amenity />
        <Amenity />
      </AmenitiesList>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est laborum.
      </Description>
      {/* <div>
        <p>Toddler Safe</p>
        <p>Slide</p>
        <p>Swings</p>
        <p>Sandbox</p>
        <p>Monkey Bars</p>
        <p>Climbing Wall</p>
        <p>Seating / Picnic Area</p>
        <p>Sun Protection</p>
        <p>Sprinklers</p>
        <p>Restrooms</p>
        <p>Drinking Fountain</p>
      </div> */}
    </Wrapper>
  );
};

export default Info;

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
        <Amenity hoverText="Toddler Safe" icon="toddler" />
        <Amenity hoverText="Slide" icon="slide" />
        <Amenity hoverText="Swings" icon="swing" />
        <Amenity hoverText="Sandbox" icon="sandbox" />
        <Amenity hoverText="Monkey Bars" icon="monkeyBars" />
        <Amenity hoverText="Climbing Wall or Structure" icon="climbingWall" />
        <Amenity hoverText="Seating or Picnic Area" icon="bench" />
        <Amenity hoverText="Sun Protection" icon="sun" />
        <Amenity hoverText="Sprinklers" icon="sprinkler" />
        <Amenity hoverText="Restrooms" icon="restrooms" />
        <Amenity hoverText="Drinking Fountain" icon="drinkingFountain" />
      </AmenitiesList>
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

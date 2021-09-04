// COMPONENTS
import Amenity from 'components/Amenity';

// STYLED COMPONENTS
import { List, Item } from '../styles/Amenities';

const Amenities = (): JSX.Element => {
  return (
    <List>
      <Item>
        <Amenity icon="toddler" />
        Toddler Safe
      </Item>
      <Item>
        <Amenity icon="slide" />
        Slide
      </Item>
      <Item>
        <Amenity icon="swing" />
        Swings
      </Item>
      <Item>
        <Amenity icon="sandbox" />
        Sandbox
      </Item>
      <Item>
        <Amenity icon="monkeyBars" />
        Monkey Bars
      </Item>
      <Item>
        <Amenity icon="climbingWall" />
        Climbing Wall or Structure
      </Item>
      <Item>
        <Amenity icon="bench" />
        Seating or Picnic Area
      </Item>
      <Item>
        <Amenity icon="sun" />
        Sun Protection
      </Item>
      <Item>
        <Amenity icon="sprinkler" />
        Sprinklers
      </Item>
      <Item>
        <Amenity icon="restrooms" />
        Restrooms
      </Item>
      <Item>
        <Amenity icon="drinkingFountain" />
        Drinking Fountain
      </Item>
    </List>
  );
};

export default Amenities;

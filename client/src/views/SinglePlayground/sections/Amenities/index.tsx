// COMPONENTS
import { Amenity } from 'components';

// STYLED COMPONENTS
import { List } from '../../styles/Amenities';

// INTERFACES
import { AmenitiesProps } from '../../types';

export const Amenities = ({ features }: AmenitiesProps): JSX.Element => (
  <List>
    {features.map((feature: string, index: number) => (
      <Amenity feature={feature} key={index} />
    ))}
  </List>
);

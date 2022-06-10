// COMPONENTS
import { Amenity } from 'components';

// STYLED COMPONENTS
import { List, ListWrapper, MoreText } from './styles';

// INTERFACES & TYPES
import { AmenitiesProps } from './types';

export const AmenitiesList = ({ features, small = false }: AmenitiesProps): JSX.Element | null => {
  if (!features || features.length === 0) {
    return null;
  }

  const renderAmenities = (list: string[]): JSX.Element[] =>
    list.map((feature: string, index: number): JSX.Element => <Amenity feature={feature} key={index} small={small} />);

  const moreFeaturesText = features.length > 4 ? `+ ${features.length - 4} more` : '';

  const renderList = (): JSX.Element => {
    if (small) {
      const shortFeaturesList = [];
      for (let i = 0; i < 4; i++) {
        shortFeaturesList.push(features[i]);
      }
      return (
        <ListWrapper>
          <List small={small}>{renderAmenities(shortFeaturesList)}</List>
          <MoreText>{moreFeaturesText}</MoreText>
        </ListWrapper>
      );
    }

    return <List small={small}>{renderAmenities(features)}</List>;
  };

  return <>{renderList()}</>;
};

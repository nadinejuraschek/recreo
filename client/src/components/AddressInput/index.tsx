// DEPENDENCIES
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';

// STYLED COMPONENTS
import { Container, Label, Validation } from '../Input/styles/Input';

// INTERFACE
import { AddressInputProps } from './types';

export const AddressInput = ({ error, handleSelect, label = true, placeholder = '', value }: AddressInputProps): JSX.Element => {
  const onPlaceSelect = (value: any): void => {
    const event = { target: { name: 'location', value: value.properties.formatted } };
    handleSelect(event);
  };

  return (
    <Container>
      {label && <Label>Location</Label>}
      <GeoapifyContext apiKey="">
        <GeoapifyGeocoderAutocomplete
          lang="en"
          limit={3}
          placeholder={placeholder}
          // @ts-ignore
          placeSelect={onPlaceSelect}
          type="street"
          value={value}
        />
      </GeoapifyContext>
      {error && <Validation>{error}</Validation>}
    </Container>
  );
};

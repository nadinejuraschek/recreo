// DEPENDENCIES
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';

// STYLED COMPONENTS
import { Container, Label, Validation } from '../Input/styles';
import { Wrapper } from './styles';

// INTERFACE
import { AddressInputProps } from './types';

export const AddressInput = ({ error, handleSelect, label = true, placeholder = '' }: AddressInputProps): JSX.Element => {
  const onPlaceSelect = (value: any): void => {
    const event = { target: { name: 'location', value: value.properties.formatted } };
    handleSelect(event);
  };

  return (
    <Container>
      {label && <Label>Location</Label>}
      <Wrapper>
        <GeoapifyContext apiKey={process.env.REACT_APP_GEOAPIFY_TOKEN}>
          <GeoapifyGeocoderAutocomplete
            lang="en"
            limit={3}
            placeholder={placeholder}
            // @ts-ignore
            placeSelect={onPlaceSelect}
          />
        </GeoapifyContext>
      </Wrapper>
      {error && <Validation>{error}</Validation>}
    </Container>
  );
};

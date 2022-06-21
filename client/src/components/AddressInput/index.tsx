import { useState } from 'react';
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';

export const AddressInput = (): JSX.Element => {
  const [place, setPlace] = useState('');

  const onPlaceSelect = (value: any) => {
    setPlace(value.properties.formatted);
  };

  return (
    <GeoapifyContext apiKey="">
      <GeoapifyGeocoderAutocomplete
        placeholder="Enter address here"
        type="street"
        lang="en"
        limit={3}
        value={place}
        // @ts-ignore
        placeSelect={onPlaceSelect}
      />
    </GeoapifyContext>
  );
};

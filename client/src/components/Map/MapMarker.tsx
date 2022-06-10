// DEPENDENCIES
import { useState } from 'react';
import { Marker, Popup } from 'react-map-gl';

// INTERFACES
import { MapMarkerProps } from './types';

export const MapMarker = ({ latitude = 48.78, longitude = 9.18, title }: MapMarkerProps): JSX.Element => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  return (
    <>
      <Marker latitude={latitude} longitude={longitude} anchor="bottom" />
      {showPopup && (
        <Popup latitude={latitude} longitude={longitude} anchor="bottom" onClose={() => setShowPopup(false)}>
          {title}
        </Popup>
      )}
    </>
  );
};

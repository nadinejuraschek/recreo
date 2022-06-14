// DEPENDENCIES
import { useRef } from 'react';
import ReactMapGL, { MapboxMap } from 'react-map-gl';

// STYLED COMPONENTS
import { Wrapper } from './styles/Map';

// COMPONENTS
import { MapMarker } from './MapMarker';
import { LoadingSpinner } from '../LoadingSpinner';

// TYPES
import { MapProps } from './types';

export const Map = ({ isLoading = false, markers = [] }: MapProps): JSX.Element => {
  const mapRef = useRef<MapboxMap | null>(null);

  const renderMarkers = () =>
    markers?.map((marker, index: number) => {
      const { latitude, longitude, title } = marker;
      return <MapMarker latitude={latitude} longitude={longitude} key={index} title={title} />;
    });

  if (isLoading) return <LoadingSpinner />;

  return (
    <Wrapper>
      <ReactMapGL
        initialViewState={{ latitude: 48.78, longitude: 9.18, zoom: 15 }}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        // @ts-ignore
        ref={mapRef}
        style={{ height: '100%', width: '100%' }}
      >
        {markers && renderMarkers()}
      </ReactMapGL>
    </Wrapper>
  );
};

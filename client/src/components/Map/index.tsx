import { useRef } from 'react';
import ReactMapGL, { MapboxMap, NavigationControl } from 'react-map-gl';
import { Wrapper } from './styles';
import { MapMarker } from './MapMarker';
import { LoadingContent } from 'components';
import { MapProps } from './types';

export const Map = ({ className = '', isLoading = false, markers = [], zoom = 10 }: MapProps): JSX.Element => {
  const mapRef = useRef<MapboxMap | null>(null);

  const renderMarkers = () =>
    markers?.map((marker, index: number) => {
      const { latitude, longitude, title } = marker;
      return <MapMarker key={index} latitude={latitude} longitude={longitude} title={title} />;
    });

  if (isLoading) {
    return (
      <Wrapper className={`map-wrapper ${className}`}>
        <LoadingContent />
      </Wrapper>
    );
  }

  const initialView =
    !markers || markers.length === 0
      ? { latitude: 30.51, longitude: -97.67 }
      : { latitude: markers[0].latitude, longitude: markers[0].longitude };

  return (
    <Wrapper className={`map-wrapper ${className}`}>
      <ReactMapGL
        initialViewState={{ ...initialView, zoom }}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        // @ts-ignore
        ref={mapRef}
        style={{ height: '100%', width: '100%' }}
      >
        {markers && renderMarkers()}
        <NavigationControl />
      </ReactMapGL>
    </Wrapper>
  );
};

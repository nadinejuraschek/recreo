export interface MapProps {
  markers?: MapMarkerProps[];
}

export interface MapMarkerProps {
  latitude?: number;
  longitude?: number;
  title: string;
}

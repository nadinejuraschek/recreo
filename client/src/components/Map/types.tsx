export interface MapProps {
  isLoading?: boolean;
  markers?: MapMarkerProps[];
}

export interface MapMarkerProps {
  latitude?: number;
  longitude?: number;
  title: string;
}

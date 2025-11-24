export interface MapProps {
  className?: string;
  isLoading?: boolean;
  markers?: MapMarkerProps[];
  zoom?: number;
}

export interface MapMarkerProps {
  latitude?: number;
  longitude?: number;
  title: string;
}

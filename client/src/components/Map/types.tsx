export interface MapProps {
  className?: string;
  isLoading?: boolean;
  markers?: MapMarkerProps[];
}

export interface MapMarkerProps {
  latitude?: number;
  longitude?: number;
  title: string;
}

// TYPES
import { Review } from 'types';

export interface HeaderProps {
  name?: string;
}

export interface InfoProps {
  description?: string;
  location?: string;
  rating?: number;
}

export interface PreviewProps {
  images?: any[];
  name?: string;
}

export interface CommentsProps {
  reviews?: Review[];
}

export interface AmenitiesProps {
  features?: any;
}

// INTERFACES
import { Amenity } from 'types';

export interface SelecterProps {
  handleChange: any;
  label?: string;
  options: Amenity[];
  placeholder: string;
}

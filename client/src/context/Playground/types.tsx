// REACT
import { ReactNode } from 'react';

export interface PlaygroundProviderProps {
  children: ReactNode;
}

export type Playground = {
  author: string;
  description: string;
  geometry: Geometry;
  image: string;
  location: string;
  price: number;
  reviews: string[];
  title: string;
  _id: string;
};

export type Geometry = {
  coordinates: number[];
  type: string;
};

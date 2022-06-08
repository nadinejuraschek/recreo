export type Amenity = {
  name: string;
  value: string;
};

export type Author = {
  username: string;
  _id: string;
  __v?: number;
};

export type Geometry = {
  coordinates: number[];
  type: string;
};

export type Playground = {
  author: Author;
  description: string;
  features: string[];
  geometry: Geometry;
  image: string;
  location: string;
  price: number;
  rating?: number;
  reviews: Review[];
  title: string;
  _id: string;
  __v?: number;
};

export type Review = {
  author: Author;
  body: string;
  rating: number;
  _id: string;
  __v?: number;
};

export type User = {
  password: string;
  username: string;
};

export type AuthenticatedUser = {
  id: string;
  username: string;
};

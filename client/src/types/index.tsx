export type Amenity = {
  name: string;
  value: string;
};

export type Author = {
  email: string;
  username: string;
  _id: string;
  __v: number;
};

export type Geometry = {
  coordinates: number[];
  type: string;
};

export type Playground = {
  author: Author;
  description: string;
  geometry: Geometry;
  image: string;
  location: string;
  price: number;
  reviews: Review[];
  title: string;
  _id: string;
};

export type Review = {
  author: Author;
  body: string;
  rating: number;
  _id: string;
  __v: number;
};

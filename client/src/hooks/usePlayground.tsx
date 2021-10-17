// REACT
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// AXIOS
import axios from 'axios';

// INTERFACES
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

export type Geometry = {
  coordinates: number[];
  type: string;
};

export type Review = {
  author: Author;
  body: string;
  rating: number;
  _id: string;
  __v: number;
};

export type Author = {
  email: string;
  username: string;
  _id: string;
  __v: number;
};

export const usePlayground = () => {
  const { id } = useParams<{ id: string }>();

  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [playground, setPlayground] = useState<Playground>();

  // GET
  useEffect(() => {
    getSinglePlayground();
  }, []);

  const getSinglePlayground = (): void => {
    setIsLoading(true);
    axios({
      url: `/api/playgrounds/${id}`,
      method: 'GET',
    })
      .then((res: any): void => {
        setIsLoading(false);
        // console.log(res.data);
        setPlayground(res.data);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  return {
    error,
    isLoading,
    playground,
  };
};

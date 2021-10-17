// REACT
import { useEffect, useState } from 'react';

// AXIOS
import axios from 'axios';

// TYPES
import { Playground } from 'types';

interface Props {
  error: string;
  isLoading: boolean;
  playgrounds: Playground[] | [];
}

export const usePlaygrounds = (): Props => {
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [playgrounds, setPlaygrounds] = useState([]);

  // GET
  useEffect(() => {
    getPlaygrounds();
  }, []);

  const getPlaygrounds = () => {
    axios({
      url: '/api/playgrounds',
      method: 'GET',
    })
      .then((res: any): void => {
        // console.log(res.data);
        setPlaygrounds(res.data);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
        setIsLoading(false);
      });
  };

  return {
    error,
    isLoading,
    playgrounds,
  };
};

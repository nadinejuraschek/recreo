// REACT
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// AXIOS
import axios from 'axios';

// INTERFACES
import { Playground } from 'types';

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

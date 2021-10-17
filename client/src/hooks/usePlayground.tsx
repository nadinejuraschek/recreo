// REACT
import { useEffect, useState } from 'react';

// AXIOS
import axios from 'axios';

export const usePlayground = () => {
  const [playgrounds, setPlaygrounds] = useState([]);

  // GET
  useEffect(() => {
    getPlaygrounds();
  }, []);

  const getPlaygrounds = () => {
    axios({
      url: '/api/playgrounds',
      method: 'GET',
    }).then((res: any): void => {
      // console.log(res.data);
      setPlaygrounds(res.data);
    });
  };

  return {
    getPlaygrounds,
    playgrounds,
  };
};

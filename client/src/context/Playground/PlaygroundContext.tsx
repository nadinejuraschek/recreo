// REACT
import { useState, createContext, useEffect } from 'react';

// AXIOS
import axios from 'axios';

// CONTEXT
export const PlaygroundContext = createContext({});

// INTERFACES
import { PlaygroundProviderProps } from './types';

export const PlaygroundProvider = ({ children }: PlaygroundProviderProps): JSX.Element => {
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
  return <PlaygroundContext.Provider value={{ playgrounds, getPlaygrounds }}>{children}</PlaygroundContext.Provider>;
};

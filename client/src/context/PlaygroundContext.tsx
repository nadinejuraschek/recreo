// REACT
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

// AXIOS
import axios from 'axios';

// CONTEXT
import { UserContext } from './UserContext';

// TYPES
import { Playground } from 'types';

export type PlaygroundContextType = {
  addPlayground: (formData: any) => void;
  error: string;
  isLoading: boolean;
  playgrounds: Playground[];
};

export const PlaygroundContext = createContext<Partial<PlaygroundContextType>>({});

export const PlaygroundProvider = (props: PropsWithChildren<any>): JSX.Element => {
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [playgrounds, setPlaygrounds] = useState<Playground[]>();

  const history = useHistory();

  const { user } = useContext(UserContext);

  useEffect(() => {
    getPlaygrounds();
  }, []);

  const getPlaygrounds = () => {
    setIsLoading(true);
    axios({
      url: '/api/playgrounds',
      method: 'GET',
    })
      .then((res: any): void => {
        setPlaygrounds(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        // console.error(err);
        setError(err);
        setIsLoading(false);
      });
  };

  const addPlayground = (formData: any): void => {
    setIsLoading(true);

    const newFormData = {
      author: user?.id,
      description: formData.description,
      features: formData.features,
      // geometry: {
      //   type: 'Point',
      //   coordinates: [formData.longitude, formData.latitude],
      // },
      image: 'https://images.pexels.com/photos/571249/pexels-photo-571249.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      location: formData.location,
      title: formData.name,
    };

    axios({
      url: '/api/playgrounds',
      method: 'POST',
      data: newFormData,
      withCredentials: true,
    })
      .then((res) => {
        setIsLoading(false);
        const addedPlayground = res.data as Playground;
        history.push(`/playgrounds/${addedPlayground._id}`);
      })
      .catch((error) => {
        setIsLoading(false);
        // console.log('Error: ', error.response);
        setError('Something went wrong. Please try again later.');
      });
  };

  return <PlaygroundContext.Provider value={{ addPlayground, error, isLoading, playgrounds }}>{props.children}</PlaygroundContext.Provider>;
};

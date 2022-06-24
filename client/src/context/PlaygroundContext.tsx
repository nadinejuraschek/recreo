// REACT
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

// AXIOS
import axios from 'axios';

// CONTEXT
import { UserContext } from './UserContext';

// TYPES
import { Playground } from 'types';

export type PlaygroundContextType = {
  addPlayground: (formData: PlaygroundFormData) => void;
  addReview: (formData: ReviewFormData, playgroundId: string) => void;
  error: string;
  isLoading: boolean;
  playgrounds: Playground[];
  success: string;
};

export type PlaygroundFormData = {
  description: string;
  features?: string[];
  location: string;
  name: string;
};

export type ReviewFormData = {
  rating: number;
  text: string;
};

export const PlaygroundContext = createContext<Partial<PlaygroundContextType>>({});

export const PlaygroundProvider = (props: PropsWithChildren<any>): JSX.Element => {
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [playgrounds, setPlaygrounds] = useState<Playground[]>();

  const history = useHistory();
  const { search } = useLocation();

  const pagination = search.replace(/^\D+/g, '');

  const { user } = useContext(UserContext);

  useEffect(() => {
    getPlaygrounds();
  }, []);

  const getPlaygrounds = () => {
    setIsLoading(true);
    axios({
      url: `/api/playgrounds?page=${pagination}`,
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

  const addPlayground = (formData: PlaygroundFormData): void => {
    setIsLoading(true);

    const newFormData = {
      author: user?.id,
      description: formData.description,
      features: formData.features,
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
        setTimeout(() => setSuccess('Your playground was created successfully!'), 5000);
        history.push(`/playgrounds/${addedPlayground._id}`);
      })
      .catch((error) => {
        setIsLoading(false);
        // console.log('Error: ', error.response);
        setError('Something went wrong. Please try again later.');
        setTimeout(() => setError(''), 5000);
      });
  };

  const addReview = (formData: ReviewFormData, playgroundId: string): void => {
    setIsLoading(true);

    const newFormData = {
      author: user?.id,
      body: formData.text,
      rating: formData.rating,
    };

    axios({
      url: `/api/playgrounds/${playgroundId}/review`,
      method: 'POST',
      data: newFormData,
      withCredentials: true,
    })
      .then((res) => {
        setIsLoading(false);
        const addedReview = res.data;
        setTimeout(() => setSuccess(addedReview), 5000);
        getPlaygrounds();
      })
      .catch((error) => {
        setIsLoading(false);
        // console.log('Error: ', error.response);
        setError('Something went wrong. Please try again later.');
      });
  };

  return (
    <PlaygroundContext.Provider value={{ addPlayground, addReview, error, isLoading, playgrounds, success }}>
      {props.children}
    </PlaygroundContext.Provider>
  );
};

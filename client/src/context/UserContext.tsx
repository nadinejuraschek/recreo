// REACT
import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

// AXIOS
import axios from 'axios';

// TYPES
import { AuthenticatedUser } from 'types';

export type UserContextType = {
  error: string;
  loading: boolean;
  loginUser: (formData: { username: string; password: string }) => void;
  logoutUser: () => void;
  registerUser: (formData: { username: string; password: string }) => void;
  user: AuthenticatedUser | null;
};

export const UserContext = createContext<Partial<UserContextType>>({});

export const UserProvider = (props: PropsWithChildren<any>): JSX.Element => {
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const history = useHistory();
  const [user, setUser] = useState<AuthenticatedUser>();

  useEffect(() => {
    getUser();
  }, []);

  const loginUser = (formData: { username: string; password: string }): void => {
    setLoading(true);
    axios({
      url: '/api/login',
      method: 'POST',
      data: formData,
      withCredentials: true,
    })
      .then((res) => {
        setLoading(false);
        setUser(res.data as AuthenticatedUser);
        history.push('/playgrounds');
      })
      .catch((error) => {
        setLoading(false);
        console.log('Error: ', error.response);
        setError('Something went wrong. Please try again later.');
      });
  };

  const registerUser = (formData: { username: string; password: string }): void => {
    console.log('formData in registerUser: ', formData);
    setLoading(true);
    axios({
      url: '/api/register',
      method: 'POST',
      data: formData,
      withCredentials: true,
    })
      .then((res) => {
        setLoading(false);
        setUser(res.data as AuthenticatedUser);
        history.push('/playgrounds');
      })
      .catch((error) => {
        setLoading(false);
        // console.error('Error: ', error.response);
        setError('Something went wrong. Please try again later.');
      });
  };

  const logoutUser = (): void => {
    axios
      .get('/api/logout', { withCredentials: true })
      .then((res) => {
        if (res.data === 'Successfully logged out.') {
          history.push('/login');
        }
      })
      .catch((err) => {
        // console.error('logout err: ', err);
        setError('Something went wrong. Please try to log out again.');
      });
  };

  const getUser = (): void => {
    axios
      .get('/api/user', { withCredentials: true })
      .then((res) => {
        setUser(res.data as AuthenticatedUser);
      })
      .catch((err) => {
        // console.error('Error: ', err);
        setError('No user logged in.');
      });
  };

  return (
    <UserContext.Provider value={{ error, loading, loginUser, logoutUser, registerUser, user }}>{props.children}</UserContext.Provider>
  );
};

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
  loginUser: (formData: UserFormData) => void;
  logoutUser: () => void;
  registerUser: (formData: UserFormData) => void;
  success: string;
  user: AuthenticatedUser | null;
};

export type UserFormData = {
  password: string;
  username: string;
};

export const UserContext = createContext<Partial<UserContextType>>({});

export const UserProvider = (props: PropsWithChildren<any>): JSX.Element => {
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<AuthenticatedUser | null>();

  const history = useHistory();

  useEffect(() => {
    getUser();
  }, []);

  const loginUser = (formData: UserFormData): void => {
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

        const { username } = res.data as AuthenticatedUser;
        setSuccess(`Welcome back, ${username}!`);
        setTimeout(() => setSuccess(''), 5000);
      })
      .catch((error) => {
        setLoading(false);
        // console.log('Error: ', error.response);
        if (error.response.data) {
          setError(error.response.data);
          setTimeout(() => setError(''), 5000);
        } else {
          setError('Something went wrong. Please try again later.');
          setTimeout(() => setError(''), 5000);
        }
      });
  };

  const registerUser = (formData: UserFormData): void => {
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

        setSuccess('Successfully registered!');
        setTimeout(() => setSuccess(''), 5000);
      })
      .catch((error) => {
        setLoading(false);
        // console.log('Error: ', error.response);
        if (error.response.data) {
          setError(error.response.data);
          setTimeout(() => setError(''), 5000);
        } else {
          setError('Something went wrong. Please try again later.');
          setTimeout(() => setError(''), 5000);
        }
      });
  };

  const logoutUser = (): void => {
    axios
      .get('/api/logout', { withCredentials: true })
      .then((res) => {
        if (res.data === 'Successfully logged out.') {
          setUser(null);
          history.push('/login');
        }
      })
      .catch((error) => {
        // console.error('logout err: ', error);
        setError('Something went wrong. Please try to log out again.');
        setTimeout(() => setError(''), 5000);
      });
  };

  const getUser = (): void => {
    axios
      .get('/api/user', { withCredentials: true })
      .then((res) => {
        setUser(res.data as AuthenticatedUser);
      })
      .catch((error) => {
        // console.log('Error: ', error.response);
        if (error.response.data) {
          setError(error.response.data);
          setTimeout(() => setError(''), 5000);
        } else {
          setError('Something went wrong. Please try again later.');
          setTimeout(() => setError(''), 5000);
        }
      });
  };

  return (
    <UserContext.Provider value={{ error, loading, loginUser, logoutUser, registerUser, success, user }}>
      {props.children}
    </UserContext.Provider>
  );
};

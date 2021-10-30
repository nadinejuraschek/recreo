// REACT
import { createContext, PropsWithChildren, useState } from 'react';
import { useHistory } from 'react-router-dom';

// AXIOS
import axios from 'axios';

// TYPES
import { User } from 'types';

export type UserContextType = {
  error: string;
  loading: boolean;
  loginUser: (formData: { email: string; password: string }) => void;
  logoutUser: () => void;
  registerUser: (formData: { email: string; password: string }) => void;
  success: boolean;
  user: User | null;
};

export const UserContext = createContext<Partial<UserContextType>>({});

export const UserProvider = (props: PropsWithChildren<any>) => {
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const history = useHistory();
  const [user, setUser] = useState<User>();

  const loginUser = (formData: { email: string; password: string }): void => {
    setLoading(true);
    axios({
      url: '/api/login',
      method: 'POST',
      data: formData,
    })
      .then((response) => {
        setLoading(false);
        history.push('/playgrounds');
        setSuccess(true);
        console.log('Data: ', response.data);
        console.log('SUCCESS!!!');
      })
      .catch((error) => {
        setLoading(false);
        console.log('Error: ', error.response);
        setError('Something went wrong. Please try again later.');
      });
  };

  const registerUser = (formData: { email: string; password: string }): void => {
    setLoading(true);
    axios({
      url: '/api/register',
      method: 'POST',
      data: formData,
    })
      .then((response) => {
        setLoading(false);
        setSuccess(true);
        console.log('Data: ', response.data);
        console.log('REGISTER SUCCESS!!!');
        // history.push('/home');
      })
      .catch((error) => {
        setLoading(false);
        console.log('Error: ', error.response);
        setError('Something went wrong. Please try again later.');
      });
  };

  const logoutUser = (): void => {
    axios
      .get(`/api/logout`)
      .then((res) => console.log('logout res: ', res))
      .catch((err) => console.error('logout err: ', err));
  };

  const getUser = (id?: string): void => {
    axios
      .get(`/api/user/${id}`, { withCredentials: true })
      .then((res) => console.log('res: ', res))
      .catch((err) => console.error(err));
  };

  return (
    <UserContext.Provider value={{ error, loading, loginUser, logoutUser, registerUser, success, user }}>
      {props.children}
    </UserContext.Provider>
  );
};

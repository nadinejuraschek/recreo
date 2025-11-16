import { createContext, PropsWithChildren, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthenticatedUser } from 'types';
import { UseMutateFunction, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export type UserContextType = {
  error: string;
  loading: boolean;
  loginUser: UseMutateFunction<void, Error, UserFormData, unknown>;
  logoutUser: () => void;
  registerUser: UseMutateFunction<void, Error, UserFormData, unknown>;
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
  const [user, setUser] = useState<AuthenticatedUser | null>();

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: loginUser, isPending: isPendingLogin } = useMutation({
    mutationFn: async (formData: UserFormData) =>
      await axios
        .post('/api/login', formData)
        .then(({ data }) => {
          queryClient.invalidateQueries({ queryKey: ['user'] });
          setUser(data as AuthenticatedUser);

          navigate('/playgrounds');

          const { username } = data as AuthenticatedUser;
          setSuccess(`Welcome back, ${username}!`);
          setTimeout(() => setSuccess(''), 5000);
        })
        .catch((isError) => {
          console.log('LOG error: ', isError);
          /* if (error.response.data) {
        setError(error.response.data);
        setTimeout(() => setError(''), 5000);
      } else {
        setError('Something went wrong. Please try again later.');
        setTimeout(() => setError(''), 5000);
      } */
        }),
  });

  const { mutate: registerUser, isPending: isPendingRegister } = useMutation({
    mutationFn: async (formData: UserFormData) =>
      await axios
        .post('/api/register', formData)
        .then(({ data }) => {
          queryClient.invalidateQueries({ queryKey: ['user'] });
          setUser(data as AuthenticatedUser);

          navigate('/playgrounds');

          setSuccess('Successfully registered!');
          setTimeout(() => setSuccess(''), 5000);
        })
        .catch((isError) => {
          console.log('LOG error: ', isError);
          /* if (error.response.data) {
          setError(error.response.data);
          setTimeout(() => setError(''), 5000);
        } else {
          setError('Something went wrong. Please try again later.');
          setTimeout(() => setError(''), 5000);
        } */
        }),
  });

  const { mutate: logoutUser, isPending: isPendingLogout } = useMutation({
    mutationFn: async () =>
      await axios
        .get('/api/logout')
        .then(({ data }) => {
          queryClient.invalidateQueries({ queryKey: ['user'] });
          if (data !== 'Successfully logged out.') {
            setError('Something went wrong. Please try to log out again.');
            setTimeout(() => setError(''), 5000);
          }

          setUser(null);
          navigate('/login');
        })
        .catch(() => {
          setError('Something went wrong. Please try to log out again.');
          setTimeout(() => setError(''), 5000);
        }),
  });

  const { isLoading: isLoadingUser } = useQuery({
    queryKey: ['user'],
    queryFn: async () =>
      await axios.get('/api/user').then((res) => {
        setUser(res.data);
      }),
    enabled: !user,
  });

  return (
    <UserContext.Provider
      value={{
        error,
        loading: isPendingLogin || isPendingRegister || isPendingLogout || isLoadingUser,
        loginUser,
        logoutUser,
        registerUser,
        success,
        user,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

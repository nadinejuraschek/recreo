import { createContext, PropsWithChildren, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthenticatedUser } from 'types';
import { UseMutateFunction, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export type UserContextType = {
  loading: boolean;
  loginUser: UseMutateFunction<void, Error, UserFormData, unknown>;
  logoutUser: () => void;
  registerUser: UseMutateFunction<void, Error, UserFormData, unknown>;
  user: AuthenticatedUser | null;
};

export type UserFormData = {
  password: string;
  username: string;
};

export const UserContext = createContext<Partial<UserContextType>>({});

export const UserProvider = (props: PropsWithChildren<any>): JSX.Element => {
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
          toast.success(`Welcome back, ${username}!`);
        })
        .catch((isError) => {
          if (isError.message) {
            toast.error(isError.message);
          } else {
            toast.error('Something went wrong. Please try again later.');
          }
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

          toast.success('Successfully registered!');
        })
        .catch((isError) => {
          if (isError.message) {
            toast.error(isError.message);
          } else {
            toast.error('Something went wrong. Please try again later.');
          }
        }),
  });

  const { mutate: logoutUser, isPending: isPendingLogout } = useMutation({
    mutationFn: async () =>
      await axios
        .get('/api/logout')
        .then(({ data }) => {
          queryClient.invalidateQueries({ queryKey: ['user'] });

          if (data !== 'Successfully logged out.') {
            toast.error('Something went wrong. Please try to log out again.');
          }

          setUser(null);
          toast.success('Successfully logged out.');
          navigate('/login');
        })
        .catch(() => {
          toast.error('Something went wrong. Please try to log out again.');
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
        loading: isPendingLogin || isPendingRegister || isPendingLogout || isLoadingUser,
        loginUser,
        logoutUser,
        registerUser,
        user,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

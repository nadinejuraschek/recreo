import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthenticatedUser } from 'types';
import { UseMutateFunction, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export type UserContextType = {
  loading: boolean;
  loginUser: UseMutateFunction<AuthenticatedUser, Error, UserFormData, unknown>;
  logoutUser: UseMutateFunction<string | void, Error, void, unknown>;
  registerUser: UseMutateFunction<AuthenticatedUser, Error, UserFormData, unknown>;
  user: AuthenticatedUser | null | undefined;
};

export type UserFormData = {
  password: string;
  username: string;
};

export const UserContext = createContext<Partial<UserContextType>>({});

export const UserProvider = (props: PropsWithChildren<any>): JSX.Element => {
  const [user, setUser] = useState<AuthenticatedUser | null | undefined>(undefined);

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: loginUser, isPending: isLoadingLogin } = useMutation<AuthenticatedUser, Error, UserFormData>({
    mutationFn: async (formData) => {
      const { data } = await axios.post(`${process.env.REACT_APP_API}api/login`, formData);
      return data as AuthenticatedUser;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      setUser(data);
      navigate('/playgrounds');
      toast.success(`Welcome back, ${data.username}!`);
    },
    onError: (err: any) => {
      toast.error(err?.message ?? 'Something went wrong. Please try again later.');
      throw err;
    },
  });

  const { mutate: registerUser, isPending: isLoadingRegister } = useMutation<AuthenticatedUser, Error, UserFormData>({
    mutationFn: async (formData) => {
      const { data } = await axios.post(`${process.env.REACT_APP_API}api/register`, formData);
      return data as AuthenticatedUser;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      setUser(data);
      navigate('/playgrounds');
      toast.success('Successfully registered!');
    },
    onError: (err: any) => {
      toast.error(err?.message ?? 'Something went wrong. Please try again later.');
      throw err;
    },
  });

  const { mutate: logoutUser, isPending: isLoadingLogout } = useMutation<string | void, Error, void>({
    mutationFn: async () => {
      const { data } = await axios.get(`${process.env.REACT_APP_API}api/logout`);
      return data as string | void;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      if (data && data !== 'Successfully logged out.') {
        toast.error('Something went wrong. Please try to log out again.');
      } else {
        toast.success('Successfully logged out.');
      }
      setUser(null);
      navigate('/login');
    },
    onError: () => {
      toast.error('Something went wrong. Please try to log out again.');
    },
  });

  const {
    data: userData,
    isError: isErrorGetUser,
    isLoading: isLoadingUser,
    isSuccess: isSuccessGetUser,
  } = useQuery<AuthenticatedUser | null, Error>({
    queryKey: ['user'],
    queryFn: async (): Promise<AuthenticatedUser | null> => {
      const res = await axios.get(`${process.env.REACT_APP_API}api/user`);
      // return null explicitly if no user
      return (res.data as AuthenticatedUser) ?? null;
    },
    enabled: user === undefined,
    retry: false,
  });

  useEffect(() => {
    if (isSuccessGetUser && userData) {
      setUser(userData ?? null);
    }

    if (isErrorGetUser) {
      toast.error("There was an error fetching the user's data. Please try again later.");
      setUser(null);
    }
  }, [isErrorGetUser, isSuccessGetUser, userData]);

  return (
    <UserContext.Provider
      value={{
        loading: isLoadingLogin || isLoadingRegister || isLoadingLogout || isLoadingUser,
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

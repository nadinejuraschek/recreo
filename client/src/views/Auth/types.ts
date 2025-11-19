export enum AUTH_MODE {
  LOGIN = 'login',
  REGISTER = 'register',
}

export interface AuthProps {
  mode: AUTH_MODE;
}

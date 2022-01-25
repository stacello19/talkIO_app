export interface AuthorizationProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  nickname: string;
}

export interface UserProps {
  token: string;
}

export interface UserDataProps {
  firstName: string;
  lastName: string;
  email: string;
  nickname: string;
  id: string;
}
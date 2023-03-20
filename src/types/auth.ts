export interface AuthSignIn {
  email: string;
  password: string;
}

export interface AuthForgotPassowrd {
  email: string;
}

export interface UserCreate {
  name: string;
  email: string;
  password: string;
  token: string;
}

export type tSiginCredentials = {
  email: string;
  password: string;
}

export type tSigupCredentials = {
  name: string;
  email: string;
  password: string;
}

export type tUserCreated = {
  name: string;
  email: string;
  password: string;
  token: string;
}

export type tUser = {
  id: number;
  name: string;
  email: string;
  password: string;
  token: string;
  created_at: string;
  deleted_at: string;
}
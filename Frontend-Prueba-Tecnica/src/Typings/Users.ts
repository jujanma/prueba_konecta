export type UsersResponse = {
  ok: boolean;
  error?: number;
  users?: Users[];
  message?: string
};

export type Users = {
  id: string;
  name: string;
  email: string;
  userType: string;
  createdAt: Date;
  updatedAt: Date;
  role?: string
};

export type CreateUserRequest = {
  name: string;
  email: string;
  role: string;
  password: string;
};

export type CreateUserResponse = {
  ok: boolean;
  error?: number;
  message?: string;
};
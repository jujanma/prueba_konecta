export type LoginPayload = {
  email: string;
  password: string;
  captchaToken: string;
};

export type LoginResponse = {
  okjwt: boolean;
  token: string;
  id: string;
  role: string;
};

import { useState } from "react";
import { FieldErrors, SubmitHandler, useForm, UseFormRegister } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { LoginPayload, LoginResponse } from "../../Typings/Login";
import MasterClient from "../../Clients/AuthClient";
import { useAuth } from "../../Context/Auth/AuthContext";

interface LoginServiceResult {
  loading: boolean;
  register: UseFormRegister<LoginPayload>;
  handleSubmit: ReturnType<typeof useForm>["handleSubmit"];
  errors: any;
  onSubmit: any;
  onVerifyCaptcha: any;
  onVerify: string;
}

export const LoginService = (): LoginServiceResult => {
  const [loading, setLoading] = useState<boolean>(false);
  const [onVerify, setOnVerify] = useState<string>("");

  const navigate = useNavigate();
  const auth = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPayload>();

  const tryLogin = async (data: LoginPayload) => {
    try {
      setLoading(true);
      console.log({onVerify})

      const response: LoginResponse = await MasterClient.login({
        ...data,
        captchaToken: onVerify,
      });

      console.log({response})

      if (response.token) {
        auth.login(data.email, response.id, response.role, response.token);
        navigate("/");
      }
    } catch (error) {
      toast.error(`Error al intentar iniciar sesión`);
      console.error("Error al intentar iniciar sesión:", error);
      setOnVerify("");
    } finally {
      setLoading(false);
    }
  };

  const onVerifyCaptcha = (token: string) => {
    setOnVerify(token);
  };

  const onSubmit: SubmitHandler<LoginPayload> = (data: LoginPayload) =>
    tryLogin(data);

  return {
    loading,
    register,
    handleSubmit,
    errors,
    onSubmit,
    onVerifyCaptcha,
    onVerify,
  };
};

import { useState } from "react";
import toast from "react-hot-toast";
import { UsersClient } from "../../Clients";
import { useForm, UseFormRegister } from "react-hook-form";
import { CreateUserRequest, CreateUserResponse } from "../../Typings/Users";

interface AddUserServiceResult {
  loadingAddUser: boolean;
  register: UseFormRegister<CreateUserRequest>;
  handleSubmit: ReturnType<typeof useForm>["handleSubmit"];
  errors: any;
  onSubmit: any;
}

export const AddUserService = (): AddUserServiceResult => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CreateUserRequest>();

  const [loadingAddUser, setLoadingAddUser] = useState(false);

  const tryCreateUser = async (data: CreateUserRequest) => {
    try {
      setLoadingAddUser(true);
      const userToken = localStorage.getItem("authToken");
      const body: CreateUserRequest = data;

      if (!userToken || !body) return;

      const response: CreateUserResponse = await UsersClient.createUser(
        userToken,
        body
      );

      if (response.ok) {
        toast.success(`Usuario creado correctamente`);
        window.location.reload();
      } else {
        throw new Error("Error al intentar crear el usuario");
      }
    } catch (error) {
      toast.error(`Error al intentar crear el usuario`);
      console.error(`Error al intentar crear el usuario:`, error);
    } finally {
      setLoadingAddUser(false);
    }
  };

  const onSubmit = (data: CreateUserRequest) => tryCreateUser(data);

  return {
    loadingAddUser,
    handleSubmit,
    register,
    errors,
    onSubmit,
  };
};

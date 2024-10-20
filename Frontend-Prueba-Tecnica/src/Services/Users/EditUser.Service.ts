import { useState } from "react";
import toast from "react-hot-toast";
import { UsersClient } from "../../Clients";
import { useForm, UseFormRegister } from "react-hook-form";
import { CreateUserRequest, CreateUserResponse, Users } from "../../Typings/Users";

interface EditUserServiceResult {
  loadingEditUser: boolean;
  register: UseFormRegister<CreateUserRequest>;
  handleSubmit: ReturnType<typeof useForm>["handleSubmit"];
  errors: any;
  onSubmit: any;
}

export const EditUserService = (editable: Users): EditUserServiceResult => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CreateUserRequest>();

  const [loadingEditUser, setLoadingEditUser] = useState(false);

  console.log({editable})

  const tryUpdateUserById = async (data: CreateUserRequest) => {
    try {
      setLoadingEditUser(true);
      const userToken = localStorage.getItem("authToken");
      const body: CreateUserRequest = data;

      if (!userToken || !editable.id || !body) return;

      const response: CreateUserResponse = await UsersClient.updateUserById(
        userToken,
        editable.id,
        body
      );

      if (response.ok) {
        toast.success(`Usuario actualizado correctamente`);
        window.location.reload();
      } else {
        throw new Error("Error al intentar actualizar el usuario");
      }
    } catch (error) {
      toast.error(`Error al intentar actualizar el usuario`);
      console.error(`Error al intentar actualizar el usuario:`, error);
    } finally {
      setLoadingEditUser(false);
    }
  };

  const onSubmit = (data: CreateUserRequest) => tryUpdateUserById(data);

  return {
    loadingEditUser,
    handleSubmit,
    register,
    errors,
    onSubmit,
  };
};

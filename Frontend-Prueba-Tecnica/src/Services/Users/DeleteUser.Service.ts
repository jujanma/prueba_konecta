import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Users, UsersResponse } from "../../Typings/Users";
import { UsersClient } from "../../Clients";

interface DeleteUserServiceResult {
  loadingDeleteUsers: boolean;
  onDelete: any;
}

export const DeleteUserService = (): DeleteUserServiceResult => {
  const [loadingDeleteUsers, setLoadingDeleteUsers] = useState(false);

  const tryDeleteUsers = async (data: Users) => {
    try {
      setLoadingDeleteUsers(true);

      const userToken = localStorage.getItem("authToken");
      if (!userToken) return;

      const response: UsersResponse = await UsersClient.DeleteUserById(
        userToken,
        data.id
      );

      if (response.ok) {
        toast.success(`Usuario eliminado correctamente`);
        window.location.reload();
      } else {
        throw new Error("Error al intentar eliminar el usuario");
      }
    } catch (error) {
      toast.error(`Error al intentar eliminar usuario`);
      console.error("Error al intentar eliminar usuario:", error);
    } finally {
      setLoadingDeleteUsers(false);
    }
  };

  const onDelete = (data: Users) => tryDeleteUsers(data);

  return {
    loadingDeleteUsers,
    onDelete,
  };
};

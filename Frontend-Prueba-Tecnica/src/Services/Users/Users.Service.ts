import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Users, UsersResponse } from "../../Typings/Users";
import { UsersClient } from "../../Clients";

interface UsersServiceResult {
    loadingUsers: boolean;
    UsersData: Users[];
}

export const UsersService = (): UsersServiceResult => {
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [UsersData, setUsersData] = useState<Users[]>([]);

  const tryGetUsers = async () => {
    try {
      setLoadingUsers(true);

      const userToken = localStorage.getItem("authToken");
      if (!userToken) return 

      const response: UsersResponse = await UsersClient.getUsers(userToken)

      if (response.ok && response.users) setUsersData(response.users)

    } catch (error) {
      toast.error(`Error al intentar obtener usuarios`);
      console.error("Error al intentar obtener usuarios:", error);
    } finally {
        setLoadingUsers(false);
    }
  };

  useEffect(() => {
    tryGetUsers()
  }, [])

  return {
    loadingUsers,
    UsersData
  };
};

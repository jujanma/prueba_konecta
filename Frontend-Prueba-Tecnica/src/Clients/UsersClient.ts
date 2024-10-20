import environments from "../env";
import { CreateUserRequest } from "../Typings/Users";

const UsersClient = {
  getUsers: async (token: string) => {
    return await fetch(`${environments.baseURL}/api/users`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.json();
      } else {
        return "Error intentando cargar usuarios";
      }
    });
  },
  createUser: async (token: string , body: CreateUserRequest) => {
    return await fetch(`${environments.baseURL}/api/users`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    }).then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.json();
      } else {
        return "Error intentando crear usuario";
      }
    });
  },
  updateUserById: async (token: string, id: string, body: any) => {
    return await fetch(`${environments.baseURL}/api/users/${id}`, {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.json();
      } else {
        return "Error intentando actualizar Usuario";
      }
    });
  },
  DeleteUserById: async (token: string, id: string) => {
    return await fetch(`${environments.baseURL}/api/users/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.json();
      } else {
        return "Error intentando eliminar Usuario";
      }
    });
  },
};

export default UsersClient;
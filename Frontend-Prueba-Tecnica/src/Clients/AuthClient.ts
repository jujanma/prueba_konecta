import toast from "react-hot-toast";
import environments from "../env"
import { LoginPayload } from "../Typings/Login";

const MasterClient = {
  login: async (body: LoginPayload) => {
    return await fetch(`${environments.baseURL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => {
      if (res.status >= 200 && res.status < 300) {
        toast.success(`Se inicio sesion correctamente`);
        return res.json();
      } else {
        toast.error(`Error intentando iniciar sesion`);
        return "Error intentando iniciar sesion";
      }
    });
  },
};

export default MasterClient;

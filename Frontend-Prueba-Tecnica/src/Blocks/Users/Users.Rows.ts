import { UsersService } from "../../Services/Users/Users.Service";
import { Users } from "../../Typings/Users";

export const UsersRows = (): Users[] => {
  const { UsersData } = UsersService();

  if (UsersData) {
    return UsersData;
  } else {
    return [];
  }
};
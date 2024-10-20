import React from "react";
import Table from "../../Components/Table/Table";
import { UserColums } from "./Users.Colums";
import { UsersRows } from "./Users.Rows";
import { UsersService } from "../../Services/Users/Users.Service";
import Loader from "../../Components/Loader/Loader";
import { Users as UsersType } from "../../Typings/Users";
import DynamicModalButton from "../../Components/DynamicModalButton/DynamicModalButton";
import UserForm from "../Forms/User/UserForm";

const Users = () => {
  const { loadingUsers } = UsersService();

  const usersResponse: UsersType[] = UsersRows();

  return (
    <section>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Usuarios</h1>
        <DynamicModalButton title="Añadir usuario">
          <UserForm />
        </DynamicModalButton>
      </div>
      <div className="flex justify-center mt-10">
        {loadingUsers ? (
          <Loader />
        ) : (
          <Table columns={UserColums} rows={usersResponse} />
        )}
      </div>
    </section>
  );
};

export default Users;

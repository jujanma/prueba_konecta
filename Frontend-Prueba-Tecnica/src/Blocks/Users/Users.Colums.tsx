import React from "react";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import formatDate from "../../Helpers/FormatDate";
import { Users } from "../../Typings/Users";
import DynamicModalButton from "../../Components/DynamicModalButton/DynamicModalButton";
import UserForm from "../Forms/User/UserForm";
import { DeleteUserService } from "../../Services/Users/DeleteUser.Service";

export const UserColums: GridColDef<Users>[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Nombre",
    width: 150,
  },
  {
    field: "email",
    headerName: "Correo",
    width: 220,
  },
  {
    field: "role",
    headerName: "Tipo",
    width: 150,
  },
  {
    field: "createdAt",
    headerName: "Fecha de creación",
    width: 200,
    renderCell: (params: GridRenderCellParams) => (
      <p>{formatDate(params.value)}</p>
    ),
  },
  {
    field: "updatedAt",
    headerName: "Fecha de actualización",
    width: 200,
    renderCell: (params: GridRenderCellParams) => (
      <p>{formatDate(params.value)}</p>
    ),
  },
  {
    field: "edit",
    headerName: "Actualizar",
    width: 110,
    renderCell: (params: GridRenderCellParams) => (
      <DynamicModalButton title="Editar">
        <UserForm editable={params.row} />
      </DynamicModalButton>
    ),
  },
  {
    field: "drop",
    headerName: "Eliminar",
    width: 110,
    renderCell: (params: GridRenderCellParams) => {
      const { onDelete } = DeleteUserService();

      return (
        <DynamicModalButton title="Eliminar">
          <div className="space-y-4">
            <p>¿Estás seguro de que deseas eliminar este usuario?</p>
            <button
              onClick={() => onDelete(params.row)}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-full"
            >
              Eliminar
            </button>
          </div>
        </DynamicModalButton>
      );
    },
  },
];

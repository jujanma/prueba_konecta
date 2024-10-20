import React from "react";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import formatCurrency from "../../Helpers/FormatCurrency";
import { Product } from "../../Typings/Products";
import StatusView from "../../Components/StatusView/StatusView";

export const ProductColums = (): GridColDef<Product>[] => {
  const navigate = useNavigate();

  const handleViewClick = (id: string) => {
    navigate(`/products/${id}`);
  };

  return [
    { field: "id", headerName: "ID", width: 80 },
    {
      field: "product",
      headerName: "Nombre",
      width: 200,
    },
    {
      field: "amount",
      headerName: "Limite de credito",
      width: 150,
      renderCell: (params: GridRenderCellParams) => (
        <p>{formatCurrency(params.value)}</p>
      ),
    },
    {
      field: "status",
      headerName: "Estado",
      width: 110,
      renderCell: (params: GridRenderCellParams) => (
        <div className="flex h-full items-center">
          <StatusView  status={params.value} />
        </div>
      ),
    },
    {
      field: "franchise",
      headerName: "Franquisia",
      width: 170,
    },
    {
      field: "updatedBy",
      headerName: "Actualizado por",
      width: 120,
    },
    {
      field: "view",
      headerName: "Detalle",
      width: 110,
      renderCell: (params: GridRenderCellParams) => (
        <button
          onClick={() => handleViewClick(params.row.id)}
          className="bg-blue-500 text-white font-bold px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out shadow-md"
        >
          Ver
        </button>
      ),
    },
  ];
};

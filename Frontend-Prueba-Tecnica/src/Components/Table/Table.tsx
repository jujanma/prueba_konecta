import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Users } from "../../Typings/Users";
import { Product } from "../../Typings/Products";

const Table = ({
  rows,
  columns,
}: {
  rows: Users[] | Product[];
  columns: GridColDef[];
}) => {
  return <DataGrid rows={rows} columns={columns} />;
};

export default Table;

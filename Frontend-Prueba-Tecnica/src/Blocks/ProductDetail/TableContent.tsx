import React from "react";
import { Product } from "../../Typings/Products";
import StatusView from "../../Components/StatusView/StatusView";
import { Link } from "react-router-dom";
import formatCurrency from "../../Helpers/FormatCurrency";
import DynamicModalButton from "../../Components/DynamicModalButton/DynamicModalButton";
import ProductForm from "../Forms/Product/ProductForm";
import { DeleteProductService } from "../../Services/Products/DeleteProduct.Service";

const TableContent = ({ ProductData }: { ProductData: Product }) => {
  const { onDelete } = DeleteProductService();

  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-6 space-y-4 w-4/5">
        <div className="space-y-2">
          <div>
            <strong>ID:</strong> {ProductData.id}
          </div>
          <div>
            <strong>Tipo de producto:</strong> {ProductData.product}
          </div>
          <div>
            <strong>Monto:</strong> {formatCurrency(ProductData.amount)}
          </div>
          <div>
            <strong>Franquicia:</strong> {ProductData.franchise}
          </div>
          <div>
            <strong>Tasa de interés:</strong> {ProductData.rate}
          </div>
          <div>
            <strong>Creado por:</strong> {ProductData.createdBy}
          </div>
          <div>
            <strong>Actualizado por:</strong> {ProductData.updatedBy}
          </div>
          <div className="flex items-center gap-2">
            <strong>Estado:</strong> <StatusView status={ProductData.status} />
          </div>
          <div>
            <strong>Creado en:</strong>{" "}
            {new Date(ProductData.createdAt).toLocaleDateString()}
          </div>
          <div>
            <strong>Actualizado en:</strong>{" "}
            {new Date(ProductData.updatedAt).toLocaleDateString()}
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        <div className="m-4 flex">
          <DynamicModalButton title="Actualizar">
            <ProductForm editable={ProductData} />
          </DynamicModalButton>
        </div>
        <Link to={"/products"}>
          <button className="w-36 m-4 p-4 text-white text-base font-bold rounded-lg bg-indigo-600">
            Volver
          </button>
        </Link>
        <div className="m-4 flex">
          <DynamicModalButton title="Eliminar">
            <div className="space-y-4">
              <p>¿Estás seguro de que deseas eliminar este usuario?</p>
              <button
                onClick={() => onDelete(ProductData)}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-full"
              >
                Eliminar
              </button>
            </div>
          </DynamicModalButton>
        </div>
      </div>
    </>
  );
};

export default TableContent;

import React from "react";
import { AddProductService } from "../../../Services/Products/AddProduct.Service";
import Loader from "../../../Components/Loader/Loader";
import { EditProductService } from "../../../Services/Products/EditProduct.Service";
import { Product } from "../../../Typings/Products";

const ProductForm = ({ editable }: { editable?: Product }) => {
  const {
    loadingAddProduct,
    handleSubmit,
    register,
    errors,
    selectedProduct,
    onSubmit: tryToCreate,
  } = AddProductService();

  const { loadingEditProduct, onSubmit: tryToUpdate } = EditProductService(editable!);

  if (loadingAddProduct || loadingEditProduct) {
    return <Loader />;
  }

  return (
    <form
      onSubmit={handleSubmit(editable ? tryToUpdate : tryToCreate)}
      className="space-y-4 max-h-80 overflow-auto p-6 bg-white rounded-lg"
    >
      <div>
        <label className="block">Producto</label>
        <select
          {...register("product", { required: "Este campo es obligatorio" })}
          defaultValue={editable?.product || ""}
          className={`border ${
            errors.product ? "border-red-500" : "border-gray-300"
          } rounded-lg p-2 w-full`}
        >
          <option value="">Seleccione...</option>
          <option value="Credito de Consumo">Credito de Consumo</option>
          <option value="Libranza Libre Inversión">
            Libranza Libre Inversión
          </option>
          <option value="Tarjeta de Credito">Tarjeta de Credito</option>
        </select>
        {errors.product && (
          <span className="text-red-500">{errors.product.message}</span>
        )}
      </div>

      <div>
        <label className="block">Cupo Solicitado</label>
        <input
          type="text"
          {...register("amount", {
            required: "Este campo es obligatorio",
            maxLength: 20,
          })}
          defaultValue={editable?.amount || ""}
          placeholder={editable?.amount ? `Anterior: ${editable.amount}` : ""}
          className={`border ${
            errors.amount ? "border-red-500" : "border-gray-300"
          } rounded-lg p-2 w-full`}
        />
        {errors.amount && (
          <span className="text-red-500">{errors.amount.message}</span>
        )}
      </div>

      {selectedProduct === "Tarjeta de Credito" && (
        <div>
          <label className="block">Franquicia</label>
          <select
            {...register("franchise", {
              required: "Este campo es obligatorio",
            })}
            defaultValue={editable?.franchise || ""}
            className={`border ${
              errors.franchise ? "border-red-500" : "border-gray-300"
            } rounded-lg p-2 w-full`}
          >
            <option value="">Seleccione...</option>
            <option value="AMEX">AMEX</option>
            <option value="VISA">VISA</option>
            <option value="MASTERCARD">MASTERCARD</option>
          </select>
          {errors.franchise && (
            <span className="text-red-500">{errors.franchise.message}</span>
          )}
        </div>
      )}

      {(selectedProduct === "Credito de Consumo" ||
        selectedProduct === "Libranza Libre Inversión") && (
        <div>
          <label className="block">Tasa</label>
          <input
            type="text"
            {...register("rate", {
              required: "Este campo es obligatorio",
              pattern: {
                value: /^\d+(\.\d{1,2})?$/,
                message: "Debe ser un número válido (ej: 10.58)",
              },
            })}
            defaultValue={editable?.rate || ""}
            placeholder={editable?.rate ? `Anterior: ${editable.rate}` : ""}
            className={`border ${
              errors.rate ? "border-red-500" : "border-gray-300"
            } rounded-lg p-2 w-full`}
          />
          {errors.rate && (
            <span className="text-red-500">{errors.rate.message}</span>
          )}
        </div>
      )}

      <div>
        <label className="block">Estado</label>
        <select
          {...register("status", {
            required: "Este campo es obligatorio",
          })}
          defaultValue={editable?.status || ""}
          className={`border ${
            errors.status ? "border-red-500" : "border-gray-300"
          } rounded-lg p-2 w-full`}
        >
          <option value="">Seleccione...</option>
          <option value="Abierto">Abierto</option>
          <option value="En Proceso">En Proceso</option>
          <option value="Finalizado">Finalizado</option>
        </select>
        {errors.status && (
          <span className="text-red-500">{errors.status.message}</span>
        )}
      </div>

      <button
        type="submit"
        className="mt-4 mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
      >
        Enviar
      </button>
    </form>
  );
};

export default ProductForm;
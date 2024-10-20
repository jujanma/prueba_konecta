import React from "react";
import { ProductService } from "../../Services/Products/Product.Service";
import { ProductRows } from "./Product.Rows";
import { Product as productType } from "../../Typings/Products";
import Loader from "../../Components/Loader/Loader";
import Table from "../../Components/Table/Table";
import { ProductColums } from "./Product.Colums";
import DynamicModalButton from "../../Components/DynamicModalButton/DynamicModalButton";
import ProductForm from "../Forms/Product/ProductForm";

const ProductList = () => {
  const { loadingProducts } = ProductService();

  const productResponseRow: productType[] = ProductRows();
  const productResponseColum = ProductColums();

  return (
    <section>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Listado de productos</h1>
        <DynamicModalButton title="Añadir producto">
            <ProductForm />
        </DynamicModalButton>
      </div>
      <div className="flex justify-center mt-10">
        {loadingProducts ? (
          <Loader />
        ) : (
          <Table columns={productResponseColum} rows={productResponseRow} />
        )}
      </div>
    </section>
  );
};

export default ProductList;

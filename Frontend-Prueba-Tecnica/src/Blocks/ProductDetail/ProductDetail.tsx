import React from "react";
import Loader from "../../Components/Loader/Loader";
import TableContent from "./TableContent";
import { DetailService } from "../../Services/Products/Details.Service";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const { loadingProductDetail, DetailData } = DetailService();

  return (
    <section>
      <h1 className="text-3xl font-bold">Detalle</h1>
      <div className="flex flex-col items-center justify-center mt-10">
        {loadingProductDetail && DetailData ? (
          <Loader />
        ) : DetailData ? (
          <TableContent ProductData={DetailData} />
        ) : (
          <h2>
            No se encontro el detalle del producto.{" "}
            {
              <span className="underline">
                <Link to="/products">Ir a productos</Link>
              </span>
            }
          </h2>
        )}
      </div>
    </section>
  );
};

export default ProductDetail;

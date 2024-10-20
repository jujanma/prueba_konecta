import React, { useEffect, useState } from "react";
import ProductChart from "./ProductChart";
import { Product } from "../../Typings/Products";
import { ProductsClient } from "../../Clients";
import Loader from "../../Components/Loader/Loader";

const ProductDashboard = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const userToken = localStorage.getItem("authToken");
        if (!userToken) return;

        const response = await ProductsClient.getAllProducts(userToken);
        if (response.ok && response.products) {
          setProducts(response.products);
        }
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {products.length > 0 ? (
        <ProductChart products={products} />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ProductDashboard;
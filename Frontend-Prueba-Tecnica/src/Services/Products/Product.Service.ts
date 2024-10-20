import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Product, ProductResponse } from "../../Typings/Products";
import { ProductsClient } from "../../Clients";

interface ProductsServiceResult {
    loadingProducts: boolean;
    ProductsData: Product[];
}

export const ProductService = (): ProductsServiceResult => {
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [ProductsData, setProductsData] = useState<Product[]>([]);

  const tryGetProducts = async () => {
    try {
      setLoadingProducts(true);

      const userToken = localStorage.getItem("authToken");
      if (!userToken) return 

      const response: ProductResponse = await ProductsClient.getAllProducts(userToken)

      if (response.ok && response.products) setProductsData(response.products)

    } catch (error) {
      toast.error(`Error al intentar obtener productos`);
      console.error("Error al intentar obtener productos:", error);
    } finally {
        setLoadingProducts(false);
    }
  };

  useEffect(() => {
    tryGetProducts()
  }, [])

  return {
    loadingProducts,
    ProductsData
  };
};

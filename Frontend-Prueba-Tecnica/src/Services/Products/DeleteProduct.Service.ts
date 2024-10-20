import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ProductsClient } from "../../Clients";
import { Product, ProductResponse } from "../../Typings/Products";
import { useNavigate } from "react-router-dom";

interface DeleteProductServiceResult {
  loadingDeleteProducts: boolean;
  onDelete: any;
}

export const DeleteProductService = (): DeleteProductServiceResult => {
  const [loadingDeleteProducts, setLoadingDeleteProducts] = useState(false);
  const navigate = useNavigate();

  const tryDeleteProduct = async (data: Product) => {
    try {
      setLoadingDeleteProducts(true);

      const userToken = localStorage.getItem("authToken");
      if (!userToken || !data.id) return;

      const response: ProductResponse = await ProductsClient.deleteProductById(
        userToken,
        data.id.toString()
      );

      if (response.ok) {
        toast.success(`Producto eliminado correctamente`);
        navigate("/products")
      } else {
        throw new Error("Error al intentar eliminar el Producto");
      }
    } catch (error) {
      toast.error(`Error al intentar eliminar Producto`);
      console.error("Error al intentar eliminar Producto:", error);
    } finally {
      setLoadingDeleteProducts(false);
    }
  };

  const onDelete = (data: Product) => tryDeleteProduct(data);

  return {
    loadingDeleteProducts,
    onDelete,
  };
};

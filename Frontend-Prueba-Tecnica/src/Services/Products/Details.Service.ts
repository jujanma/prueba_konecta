import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Product, ProductByIdResponse } from "../../Typings/Products";
import { ProductsClient } from "../../Clients";
import { useParams } from "react-router-dom";

interface DetailServiceResult {
  loadingProductDetail: boolean;
  DetailData: Product | undefined;
}

export const DetailService = (): DetailServiceResult => {
  const [loadingProductDetail, setLoadingProductDetail] = useState(false);
  const [DetailData, setDetailData] = useState<Product | undefined>(undefined);
  const { id } = useParams();

  const tryGetProductById = async () => {
    try {
      setLoadingProductDetail(true);

      const userToken = localStorage.getItem("authToken");
      if (!userToken || !id) return 

      const response: ProductByIdResponse = await ProductsClient.getProductById(userToken, id);

      if (response.ok && response.product) {
        setDetailData(response.product);
      }

    } catch (error) {
      toast.error(`Error al intentar obtener detalle del producto`);
      console.error(`Error al intentar obtener detalle del producto:`, error);
    } finally {
      setLoadingProductDetail(false);
    }
  };

  useEffect(() => {
    tryGetProductById();
  }, []);

  return {
    loadingProductDetail,
    DetailData,
  };
};
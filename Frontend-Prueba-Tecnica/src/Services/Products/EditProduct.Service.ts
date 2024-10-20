import { useState } from "react";
import toast from "react-hot-toast";
import {
  Product,
  ProductByIdResponse,
  ProductUpdateRequest,
} from "../../Typings/Products";
import { ProductsClient } from "../../Clients";
import { useForm, UseFormRegister } from "react-hook-form";

interface EditProductServiceResult {
  loadingEditProduct: boolean;
  register: UseFormRegister<Product>;
  handleSubmit: ReturnType<typeof useForm>["handleSubmit"];
  errors: any;
  selectedProduct: any;
  onSubmit: any;
}

export const EditProductService = (editable: Product): EditProductServiceResult => {
  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm<Product>();

  const [loadingEditProduct, setLoadingEditProduct] = useState(false);

  const selectedProduct = watch("product");

  const tryUpdateProductById = async (data: Product) => {
    try {
      setLoadingEditProduct(true);
      const userToken = localStorage.getItem("authToken");
      const idUser = localStorage.getItem("userNumberId");
      const body: ProductUpdateRequest = {
        product: data.product,
        amount: data.amount.toString(),
        franchise: data.franchise ?? null,
        rate: data.rate ? data.rate.toString() : null,
        updatedBy: idUser ?? "1",
        status: data.status,
      };

      if (!userToken || !editable.id || !body) return;

      const response: ProductByIdResponse =
        await ProductsClient.updateProductById(userToken, editable.id?.toString() , body);

      if (response.ok) {
        toast.success(`Producto actualizado correctamente`);
        window.location.reload();
      } else {
        throw new Error("Error al intentar actualizar el producto");
      }
    } catch (error) {
      toast.error(`Error al intentar actualizar el producto`);
      console.error(`Error al intentar actualizar el producto:`, error);
    } finally {
      setLoadingEditProduct(false);
    }
  };

  const onSubmit = (data: Product) => tryUpdateProductById(data);

  return {
    loadingEditProduct,
    handleSubmit,
    register,
    errors,
    selectedProduct,
    onSubmit,
  };
};

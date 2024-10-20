import { useState } from "react";
import toast from "react-hot-toast";
import {
  Product,
  ProductByIdResponse,
  ProductUpdateRequest,
} from "../../Typings/Products";
import { ProductsClient } from "../../Clients";
import { useForm, UseFormRegister } from "react-hook-form";

interface AddProductServiceResult {
  loadingAddProduct: boolean;
  register: UseFormRegister<Product>;
  handleSubmit: ReturnType<typeof useForm>["handleSubmit"];
  errors: any;
  selectedProduct: any;
  onSubmit: any;
}

export const AddProductService = (): AddProductServiceResult => {
  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm<Product>();

  const [loadingAddProduct, setLoadingAddProduct] = useState(false);

  const selectedProduct = watch("product");

  const tryCreateProductById = async (data: Product) => {
    try {
      setLoadingAddProduct(true);
      const userToken = localStorage.getItem("authToken");
      const idUser = localStorage.getItem("userNumberId");
      const body: ProductUpdateRequest = {
        product: data.product,
        amount: data.amount.toString(),
        franchise: data.franchise ?? null,
        rate: data.rate ? data.rate.toString() : null,
        createdBy: idUser ?? "1",
        updatedBy: idUser ?? "1",
        status: data.status,
      };

      if (!userToken || !idUser || !body) return;

      const response: ProductByIdResponse = await ProductsClient.CreateProduct(
        userToken,
        body
      );

      if (response.ok && response.product) {
        toast.success(`Producto actualizado correctamente`);
        window.location.reload();
      } else {
        throw new Error("Error al intentar crear el producto");
      }
    } catch (error) {
      toast.error(`Error al intentar crear el producto`);
      console.error(`Error al intentar crear el producto:`, error);
    } finally {
      setLoadingAddProduct(false);
    }
  };

  const onSubmit = (data: Product) => tryCreateProductById(data);

  return {
    loadingAddProduct,
    handleSubmit,
    register,
    errors,
    selectedProduct,
    onSubmit,
  };
};


import { ProductService } from "../../Services/Products/Product.Service";
import { Product } from "../../Typings/Products";

export const ProductRows = (): Product[] => {
  const { ProductsData } = ProductService();

  if (ProductsData) {
    return ProductsData;
  } else {
    return [];
  }
};
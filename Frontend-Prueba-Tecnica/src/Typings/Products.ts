export type ProductRequest = {
  product: string;
  amount: number;
  franchise: string;
  rate: number;
  updatedBy: string;
  status: string;
};

export type ProductResponse = {
  ok: boolean;
  error?: number;
  products?: Product[];
  message?: string;
};

export type ProductByIdResponse = {
  ok: boolean;
  error?: number;
  product?: Product;
  message?: string;
};

export type ProductUpdateRequest = {
  product: string 
  amount: string 
  franchise?: string
  rate?: string | null
  createdBy?: string
  updatedBy: string
  status: string
};

export type Product = {
  id?: number;
  product: string;
  amount: number;
  franchise: string;
  rate: number;
  createdBy: string;
  updatedBy: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
};

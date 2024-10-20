import environments from "../env";

const ProductsClient = {
  getAllProducts: async (token: string) => {
    return await fetch(`${environments.baseURL}/api/products`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.json();
      } else {
        return "Error intentando cargar productos";
      }
    });
  },
  getProductById: async (token: string, id: string) => {
    return await fetch(`${environments.baseURL}/api/products/${id}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.json();
      } else {
        return "Error intentando cargar producto";
      }
    });
  },
  CreateProduct: async (token: string, body: any) => {
    return await fetch(`${environments.baseURL}/api/products`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.json();
      } else {
        return "Error intentando crear producto";
      }
    });
  },
  updateProductById: async (token: string, id: string, body: any) => {
    return await fetch(`${environments.baseURL}/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.json();
      } else {
        return "Error intentando actualizar producto";
      }
    });
  },
  deleteProductById: async (token: string, id: string) => {
    return await fetch(`${environments.baseURL}/api/products/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.json();
      } else {
        return "Error intentando eliminar producto";
      }
    });
  },
};

export default ProductsClient;
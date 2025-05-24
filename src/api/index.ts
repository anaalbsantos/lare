import type { ProductProps } from "@/types";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

const getProducts = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

const getProductById = async (id: string) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    throw error;
  }
};

const patchProduct = async (id: string, data: ProductProps) => {
  try {
    const response = await api.patch(`/products/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(`Error updating product with id ${id}:`, error);
    throw error;
  }
};

const postCart = async (data: { productId: string; quantity: number }) => {
  try {
    const response = await api.post("/cart", data);
    return response.data;
  } catch (error) {
    console.error("Error adding product to cart:", error);
    throw error;
  }
};

const getCart = async () => {
  try {
    const response = await api.get("/cart");
    return response.data;
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
};

const removeProductFromCart = async (id: string) => {
  try {
    const response = await api.delete(`/cart/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error removing product with id ${id} from cart:`, error);
    throw error;
  }
};

const findProductInCart = async (productId: string) => {
  try {
    const response = await api.get(`/cart?productId=${productId}`);
    return response.data;
  } catch (error) {
    console.error(`Error finding product with id ${productId} in cart:`, error);
    throw error;
  }
};

const patchProductInCart = async (id: string, quantity: number) => {
  try {
    const response = await api.patch(`/cart/${id}`, { quantity });
    return response.data;
  } catch (error) {
    console.error(`Error updating product with id ${id} in cart:`, error);
    throw error;
  }
};

export {
  api,
  getProducts,
  getProductById,
  patchProduct,
  postCart,
  getCart,
  removeProductFromCart,
  patchProductInCart,
  findProductInCart,
};

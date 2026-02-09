import api from "../../../app/api/axios";
import type { Product, CreateProductPayload, UpdateProductPayload } from "../types/product.types";

export const getProducts = async (): Promise<Product[]> => {
  const { data } = await api.get("/products");
  return data;
};

export const createProduct = async (
  payload: CreateProductPayload
): Promise<Product> => {
  const { data } = await api.post("/products", payload);
  return data;
};

export const updateProduct = async (id: number, payload: UpdateProductPayload): Promise<Product> => {
  const { data } = await api.put(`/products/${id}`, payload);
  return data;
};

export const deleteProduct = async (id: number): Promise<void> => {
  await api.delete(`/products/${id}`);
};
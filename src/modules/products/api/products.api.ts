import api from "../../../app/api/axios";
import type { Product, CreateProductPayload } from "../types/product.types";

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

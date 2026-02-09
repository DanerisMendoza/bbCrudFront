import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getProducts, createProduct } from "../api/products.api";
import type { CreateProductPayload } from "../types/product.types";

export const useProducts = () => {
  const queryClient = useQueryClient();

  const productsQuery = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const createProductMutation = useMutation({
    mutationFn: (payload: CreateProductPayload) =>
      createProduct(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  return {
    productsQuery,
    createProductMutation,
  };
};

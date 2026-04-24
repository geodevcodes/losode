import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "./apiClient";
import { toast } from "sonner";

export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  images: string[];
  category: {
    id: number;
    name: string;
    slug: string;
    image: string;
  };
}

export interface CreateProductPayload {
  title: string;
  slug: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
}

export interface UpdateProductPayload {
  title?: string;
  slug?: string;
  price?: number;
  description?: string;
  categoryId?: number;
  images?: string[];
}

export const useCreateProductRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: CreateProductPayload): Promise<Product> => {
      const response = await axiosInstance.post("/products", payload);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Product created successfully");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: () => {
      toast.error("Failed to create product");
    },
  });
};

export const useGetProductsRequest = (limit = 20, offset = 0) => {
  return useQuery({
    queryKey: ["products", limit, offset],
    queryFn: async (): Promise<Product[]> => {
      const response = await axiosInstance.get("/products", {
        params: { limit, offset },
      });
      return response.data;
    },
  });
};

export const useGetProductRequest = (slug: string) => {
  return useQuery({
    queryKey: ["product", slug],
    queryFn: async () => {
      const response = await axiosInstance.get(`/products/slug/${slug}`);
      return response.data;
    },
    enabled: !!slug,
  });
};

export const useUpdateProductRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      productId,
      payload,
    }: {
      productId: number;
      payload: UpdateProductPayload;
    }): Promise<Product> => {
      const response = await axiosInstance.put(
        `/products/${productId}`,
        payload,
      );
      return response.data;
    },
    onSuccess: (_, variables) => {
      toast.success("Product updated successfully");
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({
        queryKey: ["product", String(variables.productId)],
      });
    },
    onError: () => {
      toast.error("Failed to update product");
    },
  });
};

export const useDeleteProductRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (productId: number) => {
      const response = await axiosInstance.delete(`/products/${productId}`);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Product deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: () => {
      toast.error("Failed to delete product");
    },
  });
};

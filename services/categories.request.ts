import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./apiClient";
import { Category } from "@/types/categories";

export const useGetCategoriesRequest = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async (): Promise<Category[]> => {
      const response = await axiosInstance.get("/categories");
      return response.data;
    },
  });
};

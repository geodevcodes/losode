import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./apiClient";
export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
}
export const useGetCategoriesRequest = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async (): Promise<Category[]> => {
      const response = await axiosInstance.get("/categories");
      return response.data;
    },
  });
};

import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services/api";

export const useProducts = ({ search, category }) => {
  return useQuery({
    queryKey: ["products", { search, category }],
    queryFn: () => fetchProducts({ search, category }),

    keepPreviousData: true,
  });
};

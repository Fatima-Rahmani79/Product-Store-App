import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "../services/api";

export const useProduct = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
    enabled: !!id,

    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });
};

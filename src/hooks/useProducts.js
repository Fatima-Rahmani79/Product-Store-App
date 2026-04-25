import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services/api";

export const useProducts = ({ search, category }) => {
  return useInfiniteQuery({
    queryKey: ["products", { search, category }],
    queryFn: ({ pageParam = 0 }) =>
      fetchProducts({ pageParam, search, category }),

    getNextPageParam: (lastPage, allPages) => {
      const total = lastPage.total;
      const loaded = allPages.length * 10;

      if (loaded >= total) return undefined;

      return allPages.length; // next page index
    },
  });
};

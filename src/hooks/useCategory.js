import { useQuery } from "@tanstack/react-query";

const fetchCategories = async () => {
  const res = await fetch("https://dummyjson.com/products/categories");
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
};

export default function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
}

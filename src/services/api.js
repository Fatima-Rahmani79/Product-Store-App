const BASE_URL = "https://dummyjson.com";

export const fetchProducts = async ({ search, category }) => {
  let url = `${BASE_URL}/products`;

  if (search) {
    url = `${BASE_URL}/products/search?q=${search}`;
  }

  if (category) {
    url = `${BASE_URL}/products/category/${category}`;
  }

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch products");

  return res.json();
};

export const fetchProductById = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
};

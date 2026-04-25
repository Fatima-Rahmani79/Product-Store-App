const BASE_URL = "https://dummyjson.com";

export const fetchProducts = async ({ pageParam = 0, search, category }) => {
  const limit = 10;
  const skip = pageParam * limit;

  let url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

  if (search) {
    url = `https://dummyjson.com/products/search?q=${search}&limit=${limit}&skip=${skip}`;
  }

  if (category) {
    url = `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`;
  }

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch");

  return res.json();
};

export const fetchProductById = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
};

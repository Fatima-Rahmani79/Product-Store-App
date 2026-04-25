import { useState } from "react";
import { Grid, Button, Select, MenuItem } from "@mui/material";
import ProductCard from "./ProductCard";
import { useProducts } from "../../hooks/useProducts";
import Loading from "../ui/Loading";
import ErrorMessage from "../ui/ErrorMessage";

export default function ProductList({ search, category }) {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useProducts({ search, category });

  const [sort, setSort] = useState("");

  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage refetch={refetch} />;

  const products = data?.pages.flatMap((page) => page.products) || [];

  let sortedProducts = [...products];

  if (sort === "price-asc") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "price-desc") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <Select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        sx={{ mb: 2 }}
      >
        <MenuItem value="">Default</MenuItem>
        <MenuItem value="price-asc">Price ↑</MenuItem>
        <MenuItem value="price-desc">Price ↓</MenuItem>
      </Select>

      <Grid container spacing={2}>
        {sortedProducts.map((product) => (
          <Grid item xs={12} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? "Loading more..." : "Load More"}
        </Button>
      )}
    </>
  );
}

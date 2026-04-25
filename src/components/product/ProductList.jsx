import { useState } from "react";
import { Grid, Button, Select, MenuItem, Box } from "@mui/material";
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

  const products = data?.pages.flatMap((page) => page.products) || [];

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    return 0;
  });

  return (
    <Box sx={{ width: "100%" }}>
      <Select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        sx={{ mb: 2, minWidth: 180 }}
      >
        <MenuItem value="">Default</MenuItem>
        <MenuItem value="price-asc">Price ↑</MenuItem>
        <MenuItem value="price-desc">Price ↓</MenuItem>
      </Select>

      <Grid container spacing={2}>
        {isLoading &&
          [...Array(3)].map((_, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Loading />
            </Grid>
          ))}

        {!isLoading &&
          sortedProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
      </Grid>

      {isError && <ErrorMessage refetch={refetch} />}

      {hasNextPage && (
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            {isFetchingNextPage ? "Loading more..." : "Load More"}
          </Button>
        </Box>
      )}
    </Box>
  );
}

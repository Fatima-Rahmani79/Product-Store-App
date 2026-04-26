import { Grid, Button, Select, MenuItem, Box, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import { useProducts } from "../../hooks/useProducts";
import Loading from "../ui/Loading";
import ErrorMessage from "../ui/ErrorMessage";
import SearchOffIcon from "@mui/icons-material/SearchOff";

export default function ProductList({ search, category, sort }) {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useProducts({ search, category });

  const products = data?.pages.flatMap((page) => page.products) || [];

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    return 0;
  });

  return (
    <Box sx={{ width: "100%" }}>
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

      {!isLoading && !isError && sortedProducts.length === 0 && (
        <Box
          sx={{
            textAlign: "center",
            mt: 6,
            color: "text.secondary",
          }}
        >
          <SearchOffIcon sx={{ fontSize: 60, mb: 2, opacity: 0.6 }} />
          <Typography variant="h6" sx={{ mb: 1 }}>
            No products found
          </Typography>

          <Typography variant="body2">
            Try changing your search or filters
          </Typography>
        </Box>
      )}

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

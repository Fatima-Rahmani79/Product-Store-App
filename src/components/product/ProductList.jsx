import { Box, Button, Typography } from "@mui/material";
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
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: 2,
          m: 2,
        }}
      >
        {isLoading &&
          [...Array(3)].map((_, i) => (
            <Box key={i} sx={{ width: "100%", height: "350px" }}>
              <Loading />
            </Box>
          ))}

        {!isLoading &&
          sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Box>

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
          <Button
            variant="contained"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            sx={{
              marginBottom: 4,
            }}
          >
            {isFetchingNextPage ? "Loading more..." : "Load More Products"}
          </Button>
        </Box>
      )}
    </Box>
  );
}

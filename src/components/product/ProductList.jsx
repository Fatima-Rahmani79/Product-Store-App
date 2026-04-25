import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import { useProducts } from "../../hooks/useProducts";

export default function ProductList() {
  const { data, isLoading, isError } = useProducts();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading products</p>;

  return (
    <Grid container spacing={2}>
      {data.products.map((product) => (
        <Grid item="true" xs={12} md={4} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

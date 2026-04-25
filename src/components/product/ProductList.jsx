import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import { useProducts } from "../../hooks/useProducts";
import { useSettings } from "../../context/SettingsContext";

export default function ProductList() {
  const { data, isLoading, isError } = useProducts();
  const { state } = useSettings();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading products</p>;

  return (
    <Grid container spacing={2}>
      {data.products.map((product) => (
        <Grid
          item
          xs={12}
          md={state.viewMode === "grid" ? 4 : 12}
          key={product.id}
        >
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

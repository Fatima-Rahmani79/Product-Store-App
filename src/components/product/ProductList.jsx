import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import { useProducts } from "../../hooks/useProducts";
import { useSettings } from "../../context/SettingsContext";
import Loading from "../ui/Loading";

export default function ProductList() {
  const { data, isLoading, isError } = useProducts();
  const { state } = useSettings();

  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage refetch={() => {}} />;

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

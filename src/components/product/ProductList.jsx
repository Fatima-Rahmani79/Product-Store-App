import { useState } from "react";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import { useProducts } from "../../hooks/useProducts";
import { useSettings } from "../../context/SettingsContext";
import Loading from "../ui/Loading";
import ErrorMessage from "../ui/ErrorMessage";

export default function ProductList({ search, category }) {
  const { data, isLoading, isError, refetch } = useProducts({
    search,
    category,
  });

  const { state } = useSettings();
  const [sort, setSort] = useState("");

  let products = data.products;

  if (sort === "price-asc") {
    products = [...products].sort((a, b) => a.price - b.price);
  }

  if (sort === "price-desc") {
    products = [...products].sort((a, b) => b.price - a.price);
  }

  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage refetch={refetch} />;

  return (
    <>
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

      <Select value={sort} onChange={(e) => setSort(e.target.value)}>
        <MenuItem value="">Default</MenuItem>
        <MenuItem value="price-asc">Price ↑</MenuItem>
        <MenuItem value="price-desc">Price ↓</MenuItem>
      </Select>
    </>
  );
}

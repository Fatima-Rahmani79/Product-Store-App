import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";

import { Grid, Typography, Button, CardMedia, Stack } from "@mui/material";

import Loading from "../components/ui/Loading";
import ErrorMessage from "../components/ui/ErrorMessage";

import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

// import { useEffect } from "react";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { data, isLoading, isError, refetch } = useProduct(id);

  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage refetch={refetch} />;

  const product = data;

  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, [id]);

  return (
    <Grid container spacing={4}>
      {/* Image */}
      <Grid item xs={12} md={6}>
        <CardMedia
          component="img"
          image={product.thumbnail}
          alt={product.title}
        />
      </Grid>

      {/* Info */}
      <Grid item xs={12} md={6}>
        <Stack spacing={2}>
          <Typography variant="h4">{product.title}</Typography>

          <Typography color="text.secondary">{product.description}</Typography>

          <Typography variant="h5">${product.price}</Typography>

          <Typography>Category: {product.category}</Typography>

          <Typography>Rating: ⭐ {product.rating}</Typography>

          <Button
            variant="contained"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}

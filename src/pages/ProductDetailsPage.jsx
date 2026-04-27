import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";

import {
  Grid,
  Typography,
  Button,
  CardMedia,
  Stack,
  Paper,
  Box,
  Chip,
} from "@mui/material";

import Loading from "../components/ui/Loading";
import ErrorMessage from "../components/ui/ErrorMessage";

import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import CategoryIcon from "@mui/icons-material/Category";
import toast from "react-hot-toast";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { data, isLoading, isError, refetch } = useProduct(id);

  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage refetch={refetch} />;

  const product = data;

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Paper
        sx={{
          p: { xs: 2, md: 4 },
          borderRadius: 3,
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <Grid container spacing={4}>
          {/* Image */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                bgcolor: "background.default",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 3,
              }}
            >
              <CardMedia
                component="img"
                image={product.thumbnail}
                alt={product.title}
                sx={{
                  maxHeight: 350,
                  objectFit: "contain",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Box>
          </Grid>

          {/* Info */}
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              {/* Title */}
              <Typography
                variant="h4"
                sx={{ fontWeight: 700, lineHeight: 1.2 }}
              >
                {product.title}
              </Typography>

              {/* Category + Rating */}
              <Stack direction="row" spacing={1} flexWrap="wrap">
                <Chip
                  icon={<CategoryIcon />}
                  label={product.category}
                  variant="outlined"
                />

                <Chip
                  icon={<StarIcon />}
                  label={product.rating}
                  color="warning"
                />
              </Stack>

              {/* Description */}
              <Typography color="text.secondary">
                {product.description}
              </Typography>

              {/* Price */}
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  color: "primary.main",
                }}
              >
                ${product.price}
              </Typography>

              {/* Button */}
              <Button
                variant="contained"
                size="large"
                startIcon={<ShoppingCartIcon />}
                sx={{
                  borderRadius: 2,
                  py: 1.2,
                  fontWeight: 700,
                  textTransform: "none",
                }}
                onClick={() => {
                  dispatch(addToCart(product));
                  toast.success("Added to cart 🛒");
                }}
              >
                Add to Cart
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

import {
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { fetchProductById } from "../../services/api";

export default function ProductCard({ product }) {
  const queryClient = useQueryClient();

  return (
    <Card
      sx={{ height: "100%" }}
      nMouseEnter={() => {
        queryClient.prefetchQuery({
          queryKey: ["product", product.id],
          queryFn: () => fetchProductById(product.id),
        });
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={product.thumbnail}
        alt={product.title}
      />

      <CardContent>
        <Stack spacing={1}>
          <Typography variant="h6">{product.title}</Typography>
          <Typography color="text.secondary">${product.price}</Typography>

          <Button variant="contained">Add to Cart</Button>
        </Stack>
      </CardContent>
      <Button component={Link} to={`/product/${product.id}`} variant="outlined">
        View Details
      </Button>
    </Card>
  );
}

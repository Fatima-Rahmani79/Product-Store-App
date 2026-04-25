import {
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  Stack,
} from "@mui/material";

export default function ProductCard({ product }) {
  return (
    <Card sx={{ height: "100%" }}>
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
    </Card>
  );
}

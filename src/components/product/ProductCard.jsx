import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Box,
  Chip,
  Rating,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { fetchProductById } from "../../services/api";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { addToCart } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

export default function ProductCard({ product }) {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <Card
      onMouseEnter={() => {
        queryClient.prefetchQuery({
          queryKey: ["product", product.id],
          queryFn: () => fetchProductById(product.id),
        });
      }}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
        boxShadow:
          theme.palette.mode === "dark"
            ? "0 8px 20px rgba(0,0,0,0.5)"
            : "0 8px 20px rgba(0,0,0,0.08)",
        transition: "all 0.25s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow:
            theme.palette.mode === "dark"
              ? "0 12px 30px rgba(0,0,0,0.7)"
              : "0 12px 30px rgba(0,0,0,0.12)",
        },
      }}
    >
      {/* Image Section */}
      <Box
        sx={{
          position: "relative",
          height: 200,
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: theme.palette.action.hover,
        }}
      >
        <Box
          component="img"
          src={product.thumbnail}
          alt={product.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            transition: "transform 0.3s",
            "&:hover": { transform: "scale(1.05)" },
          }}
        />

        <Chip
          label={product.category}
          size="small"
          sx={{
            position: "absolute",
            top: 10,
            left: 10,
            textTransform: "capitalize",
            fontWeight: 600,
            bgcolor: "background.paper",
            color: "text.primary",
          }}
        />
      </Box>

      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          gap: 1.2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            minHeight: 56,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {product.title}
        </Typography>

        <Stack direction="row" alignItems="center" spacing={1}>
          <Rating
            value={product.rating}
            precision={0.1}
            readOnly
            size="small"
          />
          <Typography variant="body2" color="text.secondary">
            {product.rating}
          </Typography>
        </Stack>

        <Divider />

        <Box sx={{ mt: "auto" }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              color: "primary.main",
              mb: 1,
            }}
          >
            ${product.price}
          </Typography>

          <Stack spacing={1}>
            <Button
              variant="contained"
              onClick={() => {
                dispatch(addToCart(product));
                toast.success("Added to cart 🛒");
              }}
              fullWidth
              startIcon={<AddShoppingCartIcon />}
              sx={{ textTransform: "none", fontWeight: 600 }}
            >
              Add to Cart
            </Button>

            <Button
              component={Link}
              to={`/product/${product.id}`}
              variant="outlined"
              fullWidth
              startIcon={<InfoOutlinedIcon />}
              sx={{ textTransform: "none", fontWeight: 600 }}
            >
              View Details
            </Button>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}

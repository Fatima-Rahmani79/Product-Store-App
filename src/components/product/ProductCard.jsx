import { Button, Card, CardContent, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{product.title}</Typography>
        <Typography variant="body2">${product.price.toFixed(2)}</Typography>

        <Button
          variant="contained"
          //   onClick={() => dispatch({ type: "addToCart", payload: product })}
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}

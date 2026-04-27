import {
  Box,
  Paper,
  Typography,
  Button,
  IconButton,
  Stack,
  Divider,
  Avatar,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  increaseQty,
  decreaseQty,
  removeFromCart,
} from "../features/cart/cartSlice";
import {
  selectCartItems,
  selectTotalItems,
  selectTotalPrice,
} from "../features/cart/cartSelectors";

import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useTheme } from "@mui/material/styles";
import toast from "react-hot-toast";

function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <Paper
      sx={{
        p: 2,
        borderRadius: 2,
        display: "flex",
        alignItems: "center",
        gap: 2,
        flexWrap: "wrap",
        border: "1px solid",
        borderColor: "divider",
        transition: "0.2s ease",
        "&:hover": {
          boxShadow: 4,
        },
      }}
    >
      <Avatar
        src={item.thumbnail}
        alt={item.title}
        variant="rounded"
        sx={{
          width: 86,
          height: 86,
          bgcolor: "background.default",
          border: "1px solid",
          borderColor: "divider",
        }}
      />

      <Box sx={{ flex: "1 1 260px", minWidth: 0 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            lineHeight: 1.2,
            mb: 0.6,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {item.title}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ my: 0.7 }}>
          Unit price: ${item.price}
        </Typography>

        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          Subtotal: ${(item.price * item.quantity).toFixed(2)}
        </Typography>
      </Box>

      <Stack direction="row" alignItems="center" spacing={1}>
        <IconButton onClick={onDecrease}>
          <Remove fontSize="small" />
        </IconButton>

        <Typography
          sx={{
            minWidth: 28,
            textAlign: "center",
            fontWeight: 700,
            alignSelf: "center",
          }}
        >
          {item.quantity}
        </Typography>

        <IconButton onClick={onIncrease}>
          <Add fontSize="small" />
        </IconButton>
      </Stack>

      <IconButton
        onClick={onRemove}
        color="error"
        sx={{
          ml: { xs: 0, sm: 1 },
        }}
      >
        <DeleteOutlined />
      </IconButton>
    </Paper>
  );
}

function OrderSummary({ totalItems, totalPrice, onClear, disabled }) {
  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 2,
        position: { md: "sticky" },
        top: { md: 20 },
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
        Order Summary
      </Typography>

      <Stack spacing={1.2}>
        <Stack direction="row" justifyContent="space-between">
          <Typography color="text.secondary">Items: </Typography>
          <Typography sx={{ fontWeight: 600 }}> {totalItems}</Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-between">
          <Typography color="text.secondary">Total: </Typography>
          <Typography sx={{ fontWeight: 700 }}>
            ${totalPrice.toFixed(2)}
          </Typography>
        </Stack>
      </Stack>

      <Divider sx={{ my: 2.5 }} />

      <Button
        fullWidth
        variant="contained"
        size="large"
        sx={{ mb: 1.2, textTransform: "none", fontWeight: 700 }}
        disabled={disabled}
        onClick={() => {
          toast.success("Order placed successfully :)");
        }}
      >
        Checkout
      </Button>

      <Button
        fullWidth
        variant="outlined"
        color="error"
        size="large"
        onClick={onClear}
        disabled={disabled}
        sx={{ textTransform: "none", fontWeight: 700 }}
      >
        Clear Cart
      </Button>
    </Paper>
  );
}

export default function CartPage() {
  const theme = useTheme();
  const dispatch = useDispatch();

  const items = useSelector(selectCartItems);
  const totalItems = useSelector(selectTotalItems);
  const totalPrice = useSelector(selectTotalPrice);

  const isEmpty = items.length === 0;

  return (
    <Box
      sx={{
        p: { xs: 2, md: 3 },
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
        gap: 3,
        alignItems: "start",
      }}
    >
      <Box>
        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2.5 }}>
          <ShoppingCartOutlinedIcon
            sx={{ color: "primary.main", fontSize: 32 }}
          />
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Shopping Cart ({totalItems})
          </Typography>
        </Stack>

        {isEmpty ? (
          <Paper
            sx={{
              p: 4,
              borderRadius: 3,
              textAlign: "center",
              border: "1px dashed",
              borderColor: "divider",
              bgcolor:
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.03)"
                  : "background.paper",
            }}
          >
            <ShoppingCartOutlinedIcon
              sx={{ fontSize: 56, opacity: 0.55, mb: 1 }}
            />
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
              Your cart is empty
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Add some products to see them here.
            </Typography>
          </Paper>
        ) : (
          <Stack spacing={2}>
            {items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onIncrease={() => dispatch(increaseQty(item.id))}
                onDecrease={() => dispatch(decreaseQty(item.id))}
                onRemove={() => dispatch(removeFromCart(item.id))}
              />
            ))}
          </Stack>
        )}
      </Box>

      <OrderSummary
        totalItems={totalItems}
        totalPrice={totalPrice}
        onClear={() => dispatch(clearCart())}
        disabled={isEmpty}
      />
    </Box>
  );
}

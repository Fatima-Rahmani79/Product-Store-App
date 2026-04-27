import {
  Paper,
  Typography,
  IconButton,
  Stack,
  Avatar,
  Box,
} from "@mui/material";

import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";

export default function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <Paper
      sx={{
        p: 2,
        borderRadius: 3,
        display: "flex",
        alignItems: "center",
        gap: 2,
        flexWrap: "wrap",
        border: "1px solid",
        borderColor: "divider",
        transition: "0.25s",
        background:
          "linear-gradient(145deg, rgba(255,255,255,0.03), transparent)",

        "&:hover": {
          boxShadow: 6,
          transform: "translateY(-2px)",
        },
      }}
    >
      {/* Image */}
      <Avatar
        src={item.thumbnail}
        alt={item.title}
        variant="rounded"
        sx={{
          width: 90,
          height: 90,
          bgcolor: "background.paper",
          border: "1px solid",
          borderColor: "divider",
        }}
      />

      {/* Info */}
      <Box sx={{ flex: "1 1 250px", minWidth: 0 }}>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 700,
            mb: 0.5,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {item.title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          ${item.price} each
        </Typography>

        <Typography variant="body2" sx={{ fontWeight: 600, mt: 0.5 }}>
          ${(item.price * item.quantity).toFixed(2)}
        </Typography>
      </Box>

      {/* Quantity */}
      <Stack direction="row" alignItems="center" spacing={1}>
        <IconButton onClick={onDecrease} size="small">
          <Remove />
        </IconButton>

        <Typography sx={{ fontWeight: 700 }}>{item.quantity}</Typography>

        <IconButton onClick={onIncrease} size="small">
          <Add />
        </IconButton>
      </Stack>

      {/* Delete */}
      <IconButton color="error" onClick={onRemove}>
        <DeleteOutlined />
      </IconButton>
    </Paper>
  );
}

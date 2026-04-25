import { AppBar, Badge, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import { useSelector } from "react-redux";
import { selectTotalItems } from "../../features/cart/cartSelectors";
import { useSettings } from "../../context/SettingsContext";
import { Link } from "react-router-dom";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Navbar() {
  const totalItems = useSelector(selectTotalItems);
  const { dispatch } = useSettings();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
        >
          Product Store
        </Typography>

        {/* Toggle Theme */}
        {/* <IconButton
          color="inherit"
          onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        >
          {useSettings().theme === "light" ? (
            <DarkModeIcon />
          ) : (
            <LightModeIcon />
          )}
        </IconButton> */}

        <IconButton
          color="inherit"
          onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        >
          <DarkModeIcon />
        </IconButton>

        {/* Cart */}
        <IconButton component={Link} to="/cart" color="inherit">
          <Badge badgeContent={totalItems} color="error">
            <ShoppingCarticon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

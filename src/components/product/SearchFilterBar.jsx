import {
  Box,
  TextField,
  MenuItem,
  InputAdornment,
  IconButton,
  Paper,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

export default function SearchFilterBar({
  search,
  category,
  sort,
  setParams,
  setSort,
}) {
  const updateSearch = (value) => {
    setParams((prev) => {
      const next = new URLSearchParams(prev);
      if (value.trim()) next.set("search", value);
      else next.delete("search");
      return next;
    });
  };

  const updateCategory = (value) => {
    setParams((prev) => {
      const next = new URLSearchParams(prev);
      if (value) next.set("category", value);
      else next.delete("category");
      return next;
    });
  };

  const updateSort = (value) => {
    setParams((prev) => {
      const next = new URLSearchParams(prev);
      if (value) next.set("sort", value);
      else next.delete("sort");
      return next;
    });
  };

  return (
    <Paper
      elevation={2}
      sx={{
        p: 2,
        my: 3,
        borderRadius: 1,
        display: "flex",
        alignItems: "center",
        gap: 2,
        flexWrap: "wrap",
      }}
    >
      {/* Search Input */}
      <TextField
        value={search}
        onChange={(e) => updateSearch(e.target.value)}
        placeholder="Search products..."
        size="small"
        sx={{ flex: "1 1 280px", minWidth: 240 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchRoundedIcon fontSize="small" />
            </InputAdornment>
          ),
          endAdornment: search ? (
            <InputAdornment position="end">
              <IconButton size="small" onClick={() => updateSearch("")}>
                <ClearRoundedIcon fontSize="small" />
              </IconButton>
            </InputAdornment>
          ) : null,
        }}
      />

      {/* Category Filter */}
      <TextField
        select
        value={category}
        onChange={(e) => updateCategory(e.target.value)}
        size="small"
        label="Category"
        sx={{ flex: "0 1 220px", minWidth: 180 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CategoryRoundedIcon fontSize="small" />
            </InputAdornment>
          ),
        }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="groceries">Groceries</MenuItem>
        <MenuItem value="beauty">Beauty</MenuItem>
        <MenuItem value="home-decoration">Home Decoration</MenuItem>
      </TextField>

      {/* Sort */}
      <TextField
        select
        value={sort}
        onChange={(e) => updateSort(e.target.value)}
        size="small"
        label="Sort"
        sx={{ flex: "0 1 180px", minWidth: 160 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SortRoundedIcon fontSize="small" />
            </InputAdornment>
          ),
        }}
      >
        <MenuItem value="">Default</MenuItem>
        <MenuItem value="price-asc">Decending Price ↑</MenuItem>
        <MenuItem value="price-desc">Ascending Price ↓</MenuItem>
      </TextField>
    </Paper>
  );
}

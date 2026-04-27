import {
  TextField,
  MenuItem,
  InputAdornment,
  IconButton,
  Paper,
  CircularProgress,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import useCategories from "../../hooks/useCategory";

export default function SearchFilterBar({ search, category, sort, setParams }) {
  const [input, setInput] = useState(search);

  const debouncedSearch = useDebounce(input, 400);

  const { data: categories = [], isLoading } = useCategories();

  useEffect(() => {
    setInput(search);
  }, [search]);

  useEffect(() => {
    setParams((prev) => {
      const next = new URLSearchParams(prev);
      if (debouncedSearch.trim()) next.set("search", debouncedSearch);
      else next.delete("search");
      return next;
    });
  }, [debouncedSearch, setParams]);

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
        borderRadius: 2,
        display: "flex",
        alignitems: "center",
        gap: 2,
        flexWrap: "wrap",
      }}
    >
      {/* Search */}
      <TextField
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search products..."
        size="small"
        sx={{ flex: "1 1 280px", minWidth: 240 }}
        inputprops={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchRoundedIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              {input !== debouncedSearch ? (
                <CircularProgress size={18} />
              ) : input ? (
                <IconButton size="small" onClick={() => setInput("")}>
                  <ClearRoundedIcon />
                </IconButton>
              ) : null}
            </InputAdornment>
          ),
        }}
      />

      {/* Category */}
      <TextField
        select
        value={category}
        onChange={(e) => updateCategory(e.target.value)}
        size="small"
        label="Category"
        sx={{ flex: "0 1 200px" }}
      >
        <MenuItem value="">All</MenuItem>

        {isLoading ? (
          <MenuItem disabled>Loading...</MenuItem>
        ) : (
          categories.map((cat) => (
            <MenuItem key={cat.slug} value={cat.slug}>
              {cat.name}
            </MenuItem>
          ))
        )}
      </TextField>

      {/* Sort */}
      <TextField
        select
        value={sort}
        onChange={(e) => updateSort(e.target.value)}
        size="small"
        label="Sort"
        sx={{ flex: "0 1 180px" }}
        inputprops={{
          startAdornment: (
            <InputAdornment position="start">
              <SortRoundedIcon fontSize="small" />
            </InputAdornment>
          ),
        }}
      >
        <MenuItem value="">Default</MenuItem>
        <MenuItem value="price-asc">Price ↑</MenuItem>
        <MenuItem value="price-desc">Price ↓</MenuItem>
      </TextField>
    </Paper>
  );
}

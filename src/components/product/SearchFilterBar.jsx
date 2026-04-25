import { TextField, Select, MenuItem, Stack } from "@mui/material";
export default function SearchFilterBar({ search, category, setParams }) {
  return (
    <Stack direction="row" spacing={2}>
      {/* Search */}
      <TextField
        label="Search"
        value={search}
        onChange={(e) =>
          setParams((prev) => {
            prev.set("search", e.target.value);
            return prev;
          })
        }
      />

      {/* Category */}
      <Select
        value={category}
        onChange={(e) =>
          setParams((prev) => {
            prev.set("category", e.target.value);
            return prev;
          })
        }
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="smartphones">Smartphones</MenuItem>
        <MenuItem value="laptops">Laptops</MenuItem>
        <MenuItem value="fragrances">Fragrances</MenuItem>
      </Select>
    </Stack>
  );
}

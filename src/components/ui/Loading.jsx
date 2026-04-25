import { Grid, Skeleton } from "@mui/material";

export default function Loading() {
  return (
    <Grid container spacing={2}>
      {[...Array(6)].map((_, i) => (
        <Grid item xs={12} md={4} key={i}>
          <Skeleton variant="rectangular" height={200} />
          <Skeleton />
          <Skeleton width="60%" />
        </Grid>
      ))}
    </Grid>
  );
}

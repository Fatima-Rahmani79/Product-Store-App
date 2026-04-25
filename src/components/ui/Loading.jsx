import { Box, Card, CardContent, Skeleton, Stack } from "@mui/material";

export default function Loading() {
  return (
    <Card
      sx={{
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: 2,
        height: "100%",
      }}
    >
      <Skeleton
        variant="rectangular"
        height={200}
        width="100%"
        animation="wave"
      />

      <CardContent>
        <Stack spacing={1.3}>
          <Skeleton variant="text" width="85%" height={32} animation="wave" />
          <Skeleton variant="text" width="55%" animation="wave" />
          <Skeleton variant="text" width="40%" animation="wave" />

          <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
            <Skeleton
              variant="rounded"
              width={150}
              height={60}
              animation="wave"
            />
            <Skeleton
              variant="rounded"
              width={150}
              height={60}
              animation="wave"
            />
          </Box>

          <Skeleton
            variant="rounded"
            width="100%"
            height={42}
            sx={{ mt: 1 }}
            animation="wave"
          />
        </Stack>
      </CardContent>
    </Card>
  );
}

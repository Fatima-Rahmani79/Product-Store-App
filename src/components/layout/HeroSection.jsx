import { Box, Button, Typography } from "@mui/material";
function HeroSection() {
  return (
    <Box
      sx={{
        height: { xs: 260, md: 400 },
        mt: 1,
        mb: 1,
        px: { xs: 3, md: 6 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

        borderRadius: 4,
        overflow: "hidden",
        position: "relative",

        backgroundImage:
          "url(https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?q=80&w=2064&auto=format&fit=crop)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2))",
        }}
      />

      {/* content */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, color: "#fff" }}>
          Discover Amazing Products
        </Typography>

        <Typography sx={{ mb: 3, color: "rgba(255,255,255,0.8)" }}>
          Browse, search, and find the best deals instantly.
        </Typography>

        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(135deg, #6366f1, #06b6d4)",
          }}
        >
          Start Shopping
        </Button>
      </Box>
    </Box>
  );
}

export default HeroSection;

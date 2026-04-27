import { Box, Typography } from "@mui/material";
function Footer() {
  return (
    <Box
      sx={{
        mt: 6,
        py: 4,
        borderTop: "1px solid",
        borderColor: "divider",
        textAlign: "center",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Product Store
      </Typography>

      <Typography variant="body2" color="text.secondary">
        Built with ❤️ using React & MUI
      </Typography>
    </Box>
  );
}
export default Footer;

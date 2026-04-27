import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Box, Container } from "@mui/material";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Box sx={{ mt: 2 }}>
          <Outlet />
        </Box>
      </Container>
    </>
  );
}

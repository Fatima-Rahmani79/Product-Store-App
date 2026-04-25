import { Container } from "@mui/material";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Box mt={4}>{children}</Box>
      </Container>
    </>
  );
}

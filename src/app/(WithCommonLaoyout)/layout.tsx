import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import { Box, Container } from "@mui/material";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl" sx={{minHeight: "100vh"}}>{children}</Container>
      <Footer />
    </>
  );
};

export default CommonLayout;

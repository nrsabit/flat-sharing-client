import Navbar from "@/components/shared/Navbar/Navbar";
import { Box, Typography } from "@mui/material";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Box sx={{ minHeight: "screen" }}>{children}</Box>
      <Typography>This is footer</Typography>
    </>
  );
};

export default CommonLayout;

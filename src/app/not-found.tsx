import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Page Not Found
      </Typography>
      <Button component={Link} href="/" variant="contained" color="primary">
        Go Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;

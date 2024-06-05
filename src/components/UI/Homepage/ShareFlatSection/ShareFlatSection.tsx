import { Box, Button } from "@mui/material";
import Link from "next/link";

const ShareFlatSection = () => {
  return (
    <Box
      mt={2}
      borderRadius={2}
      p={5}
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="#e7e7e7"
    >
      <Link href="/dashboard/share-flat">
        <Button>Share Your Flat</Button>
      </Link>
    </Box>
  );
};

export default ShareFlatSection;

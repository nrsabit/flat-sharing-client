import Image from "next/image";
import banner from "@/assets/images/flat-ad.png";
import { Box } from "@mui/material";

const AdSection = () => {
  return (
    <Box mt={5}>
      <Image style={{ borderRadius: "8px" }} src={banner} alt="Banner" />
    </Box>
  );
};

export default AdSection;

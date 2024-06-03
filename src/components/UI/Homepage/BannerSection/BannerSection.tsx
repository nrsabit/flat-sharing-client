import Image from "next/image";
import banner from "@/assets/images/homepage-banner.png";
import { Box } from "@mui/material";

const BannerSection = () => {
  return (
    <Box mt={2}>
      <Image style={{borderRadius: "8px"}} src={banner} alt="Banner" />
    </Box>
  );
};

export default BannerSection;

import Image from "next/image";
import banner from "@/assets/images/homepage-banner.png";
import { Container } from "@mui/material";

const BannerSection = () => {
  return (
    <Container maxWidth="xl">
      <Image src={banner} alt="Banner" />
    </Container>
  );
};

export default BannerSection;

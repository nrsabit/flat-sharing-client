
import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import Image from "next/image";
import checkImage from "@/assets/images/checkmark.png";

const features = [
  { title: "100% Secured", imgSrc: checkImage },
  { title: "User Friendly", imgSrc: checkImage },
  { title: "Fast Performance", imgSrc: checkImage },
  { title: "24/7 Support", imgSrc: checkImage },
  { title: "Highly Customizable", imgSrc: checkImage },
];

const FeatureSection = () => {
  return (
    <Box
      mt={5}
      sx={{ padding: "2rem", backgroundColor: "#f4f4f4", borderRadius: "8px" }}
    >
      <Grid container spacing={2}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
            <Box
              textAlign="center"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={feature.imgSrc}
                alt={feature.title}
                width={100}
                height={100}
              />
              <Typography variant="h6" mt={2}>
                {feature.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeatureSection;

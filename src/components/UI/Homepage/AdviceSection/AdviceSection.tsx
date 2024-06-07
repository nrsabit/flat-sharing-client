import React from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Image from "next/image";

const adviceContent = [
  {
    title: "Set Your Budget",
    description:
      "Determine how much you can afford to spend on rent each month. Don’t forget to include utilities, internet, and other expenses in your budget.",
  },
  {
    title: "Choose the Right Location",
    description:
      "Consider the proximity to your workplace or school, public transportation options, and the neighborhood amenities like grocery stores, parks, and restaurants.",
  },
  {
    title: "Inspect the Property",
    description:
      "Always visit the flat in person before making a decision. Check for any damages, the condition of appliances, and the overall cleanliness.",
  },
  {
    title: "Read the Lease Agreement Carefully",
    description:
      "Make sure you understand all the terms and conditions of the lease agreement, including the duration, rent amount, security deposit, and policies on repairs and maintenance.",
  },
  {
    title: "Ask Questions",
    description:
      "Don’t hesitate to ask the landlord or property manager about any concerns you have. It’s important to have all your questions answered before signing the lease.",
  },
];

const AdviceSection = () => {
  return (
    <Box sx={{ p: 4, mt: 4, bgcolor: "#e7e7e7", borderRadius: "8px" }}>
      <Grid
        container
        spacing={4}
        alignItems="center"
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom mb={2}>
            Advice for Finding Flats
          </Typography>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: 200, md: 400 },
            }}
          >
            <Image
              src="https://res.cloudinary.com/dg4spmx5h/image/upload/v1717801901/ColbyKernbyTessaCooper-2_o1zzvt.webp"
              alt="Advice for Finding Flats"
              layout="fill"
              objectFit="cover"
              style={{ borderRadius: "8px" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <List>
            {adviceContent.map((advice, index) => (
              <ListItem key={index} alignItems="flex-start">
                <Box>
                  <Typography variant="h6" gutterBottom>
                    {advice.title}
                  </Typography>

                  <Typography variant="body1">{advice.description}</Typography>
                </Box>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdviceSection;

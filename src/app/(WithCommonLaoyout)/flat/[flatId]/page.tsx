"use client";
import React from "react";
import {
  Grid,
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { useGetSilgleFlatQuery } from "@/redux/api/flatsApi";
import Link from "next/link";

type TParams = {
  params: {
    flatId: string;
  };
};

const FlatDetails = ({ params }: TParams) => {
  const { data: flat } = useGetSilgleFlatQuery(params.flatId);

  return (
    <Box>
      <Card sx={{ bgcolor: "#e7e7e7", marginTop: "20px" }}>
        <CardMedia
          component="img"
          image={flat?.images[0]}
          alt={flat?.location}
          style={{ height: "400px", objectFit: "cover" }}
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {flat?.location}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Rent: {flat?.rent}Tk
          </Typography>
          <Typography variant="body1" paragraph>
            {flat?.description}
          </Typography>
          <Typography variant="body1" paragraph>
            Amenities: {flat?.amenities}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Total Bedrooms: {flat?.totalBedrooms}
          </Typography>
        </CardContent>
      </Card>

      <Box
        mt={4}
        sx={{ bgcolor: "#e7e7e7", padding: "20px", borderRadius: "8px" }}
      >
        <Typography variant="h6" component="h3">
          Other Images
        </Typography>
        <Grid container spacing={2} mt={2}>
          {flat?.images?.slice(1).map((image: string, index: number) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  image={image}
                  alt={`Image ${index + 1}`}
                  style={{ height: "200px", objectFit: "cover" }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box mt={4} display="flex" justifyContent="center">
        <Link href={`/share-request/${params.flatId}`}>
          <Button variant="contained" color="primary">
            Flat Share Request
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default FlatDetails;

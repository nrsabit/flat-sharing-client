"use client";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useGetAllFlatsQuery } from "@/redux/api/flatsApi";
import FSForm from "@/components/Forms/FSForm";
import { FieldValues } from "react-hook-form";
import FSInput from "@/components/Forms/FSInput";
import { useState } from "react";
import Link from "next/link";
import LoadingPage from "@/app/loading";

const FlatsSection = () => {
  const [query, setQuery] = useState({});

  const { data: flats, isLoading } = useGetAllFlatsQuery({ ...query });

  const handleSearch = (values: FieldValues) => {
    setQuery(values);
  };

  const handleClearSearch = () => {
    setQuery({});
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <Container sx={{ marginY: "50px" }}>
      <Typography component="p" variant="h4" mb={2}>
        Explore Shared Flats
      </Typography>
      <FSForm onSubmit={handleSearch}>
        <Stack
          gap={2}
          direction={{ sm: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          bgcolor="#e7e7e7"
          p={2}
          borderRadius={2}
        >
          <FSInput
            size="small"
            name="searchTerm"
            placeholder="Search by Location"
          />
          <FSInput
            size="small"
            name="minPrice"
            placeholder="Min Rent"
            type="number"
          />
          <FSInput
            size="small"
            name="maxPrice"
            placeholder="Max Rent"
            type="number"
          />
          <FSInput
            size="small"
            name="totalBedrooms"
            placeholder="Bedrooms"
            type="number"
          />
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={2}
          mt={1}
        >
          <Button type="submit" disabled={isLoading}>
            Search
          </Button>
          <Button
            sx={{ bgcolor: "secondary.main" }}
            onClick={handleClearSearch}
            disabled={isLoading}
          >
            Clear Search
          </Button>
        </Stack>
      </FSForm>
      <Grid container spacing={3} mt={2}>
        {flats?.map((item: any, index: number) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ bgcolor: "#e7e7e7" }}>
              <CardMedia
                component="img"
                sx={{ height: 200, objectFit: "cover" }}
                image={item.images[0]}
                alt={item.location}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description.length > 50
                    ? `${item.description.substring(0, 50)}...`
                    : item.description}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  Rent: {item.rent}Tk
                </Typography>
                <Typography variant="body2" color="text.primary">
                  Bedrooms: {item.totalBedrooms}
                </Typography>
              </CardContent>
              <CardActions sx={{ marginBottom: "10px" }}>
                <Link href={`/flat/${item.id}`}>
                  <Button size="small" color="primary">
                    See Details
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FlatsSection;

"use client";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useGetMyRequestsQuery } from "@/redux/api/flatRequestsApi";

const MyFlatRequests = () => {
  const { data: requests } = useGetMyRequestsQuery({});

  return (
    <Box>
      <Typography component="p" variant="h4" mb={2}>
        My Booking Requests
      </Typography>
      <Grid container spacing={3} mt={2}>
        {requests?.map((item: any, index: number) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ bgcolor: "#e7e7e7" }}>
              <CardMedia
                component="img"
                sx={{ height: 200, objectFit: "cover" }}
                image={item?.flat?.images[0]}
                alt={item.location}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item?.flat?.location}
                </Typography>
              </CardContent>
              <CardActions sx={{ marginBottom: "10px" }}>
                <Button
                  size="small"
                  sx={{
                    backgroundColor:
                      item?.status === "APPROVED"
                        ? "green"
                        : item?.status === "PENDING"
                        ? "yellow"
                        : item?.status === "REJECTED"
                        ? "red"
                        : "default",
                    color: item?.status === "PENDING" ? "black" : "white",
                  }}
                >
                  {item?.status}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MyFlatRequests;

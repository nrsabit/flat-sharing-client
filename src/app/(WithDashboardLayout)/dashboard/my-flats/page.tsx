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
import {
  useDeleteFlatMutation,
  useGetMyFlatsQuery,
} from "@/redux/api/flatsApi";
import { toast } from "sonner";
import Link from "next/link";
import LoadingPage from "@/app/loading";

const MyFlats = () => {
  const { data: flats, isLoading: isMyFlatsLoading } = useGetMyFlatsQuery({});
  const [deleteFlat, { isLoading }] = useDeleteFlatMutation();

  const handleDelete = async (id: string) => {
    try {
      toast.warning("Are you confirm to delete?", {
        action: {
          label: "Confirm",
          onClick: async () => {
            const res = await deleteFlat(id).unwrap();
            if (res?.id) {
              toast.success("Flat deleted successfully");
            } else {
              toast.error("Failed to delete the flat");
            }
          },
        },
        cancel: {
          label: "Cancel",
          onClick: () => {
            toast.dismiss();
          },
        },
        cancelButtonStyle: { background: "red" },
      });
    } catch (err: any) {
      toast.error(err?.message || "Something went wrong");
    }
  };

  if(isMyFlatsLoading || isLoading){
    return <LoadingPage/>
  }

  return (
    <Box>
      <Typography component="p" variant="h4" mb={2}>
        My Shared Flats
      </Typography>
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
                <Link href={`/dashboard/edit-flat/${item?.id}`}>
                  <Button size="small" color="primary">
                    Update
                  </Button>
                </Link>
                <Button
                  onClick={() => handleDelete(item?.id)}
                  size="small"
                  sx={{ bgcolor: "red" }}
                  disabled={isLoading}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MyFlats;

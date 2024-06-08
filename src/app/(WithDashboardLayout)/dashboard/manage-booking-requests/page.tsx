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
import { toast } from "sonner";
import {
  useChangeBookingStatusMutation,
  useGetAllRequestsQuery,
} from "@/redux/api/flatRequestsApi";
import LoadingPage from "@/app/loading";
import { useGetMeQuery } from "@/redux/api/usersApi";
import { useRouter } from "next/navigation";

const ManageRequests = () => {
  const { data: requests } = useGetAllRequestsQuery({});
  const { data: user, isLoading: isMeLoading } = useGetMeQuery({});
  const [changeStatus, { isLoading }] = useChangeBookingStatusMutation();
  const router = useRouter();

  const handleSubmit = async (id: string, status: string) => {
    const data = {
      id,
      data: { status },
    };
    try {
      const res: any = await changeStatus(data).unwrap();
      if (res?.id) {
        toast.success("Booking Status Updated successfully");
      } else {
        toast.error("Filed to update the status");
      }
    } catch (err: any) {
      toast.error(err?.message || "Something went wrong");
    }
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!isMeLoading && user?.role !== "admin") {
    return router.push("/login");
  }

  return (
    <Box>
      <Typography component="p" variant="h4" mb={2}>
        Manage Flat Requests
      </Typography>
      <Grid container spacing={3} mt={2}>
        {requests?.map((item: any, index: number) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ bgcolor: "#e7e7e7" }}>
              <CardMedia
                component="img"
                sx={{ height: 200, objectFit: "cover" }}
                image={item?.flat?.images[0]}
                alt={item?.flat?.location}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item?.flat?.location}
                </Typography>
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
                <Typography mt={2} gutterBottom variant="body1" component="div">
                  Requested by: {item?.user?.userName}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  User Email: {item?.user?.email}
                </Typography>
              </CardContent>
              <CardActions sx={{ marginBottom: "10px" }}>
                <Button
                  onClick={() => handleSubmit(item?.id, "APPROVED")}
                  disabled={item.status === "APPROVED" || isLoading}
                  size="small"
                  color="primary"
                >
                  Approve
                </Button>
                <Button
                  onClick={() => handleSubmit(item?.id, "REJECTED")}
                  size="small"
                  sx={{ bgcolor: "red" }}
                  disabled={item.status === "REJECTED" || isLoading}
                >
                  Reject
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ManageRequests;

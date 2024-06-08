"use client";
import LoadingPage from "@/app/loading";
import {
  useGetAllUsersQuery,
  useGetMeQuery,
  useUpdateUserStatusMutation,
} from "@/redux/api/usersApi";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const ManageUsers = () => {
  const { data: users, isLoading: isUsersLoading } = useGetAllUsersQuery({});
  const { data: user, isLoading: isMeLoading } = useGetMeQuery({});

  const [changeStatus, { isLoading: userUpdateLoading }] =
    useUpdateUserStatusMutation();

  const router = useRouter()

  const handleChangeRole = async (id: string, role: string) => {
    const updateData = {
      id,
      data: {
        role: role === "user" ? "admin" : "user",
      },
    };
    try {
      const res = await changeStatus(updateData).unwrap();
      if (res?.id) {
        toast.success("User Role Changed Successfully");
      } else {
        toast.error("Failed to update the role");
      }
    } catch (err: any) {
      toast.error(err.message || "Something went wrong");
    }
  };

  const handleChangeStatus = async (id: string, isActive: boolean) => {
    const updateData = {
      id,
      data: {
        isActive: isActive === true ? false : true,
      },
    };
    try {
      const res = await changeStatus(updateData).unwrap();
      if (res?.id) {
        toast.success("User Status Changed Successfully");
      }
    } catch (err: any) {
      toast.error(err.message || "Something went wrong");
    }
  };

  if (isUsersLoading || userUpdateLoading) {
    return <LoadingPage />;
  }

  if (!isMeLoading && user?.role !== "admin") {
    return router.push("/login");
  }

  return (
    <Box>
      <Typography component="p" variant="h4" mb={2}>
        Manage Users
      </Typography>
      <Grid container spacing={3} mt={2}>
        {users?.map((item: any, index: number) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ bgcolor: "#e7e7e7" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.userName}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  Email: {item.email}
                </Typography>
                <Typography variant="h6" color="text.primary">
                  Role: {item.role}
                </Typography>
              </CardContent>
              <CardActions sx={{ marginBottom: "10px" }}>
                <Button
                  onClick={() => handleChangeRole(item.id, item.role)}
                  size="small"
                  color="primary"
                >
                  {item?.role === "user" ? "Make Admin" : "Make User"}
                </Button>
                <Button
                  onClick={() => handleChangeStatus(item.id, item.isActive)}
                  size="small"
                  sx={{ bgcolor: item.isActive ? "red" : "green" }}
                >
                  {item?.isActive === true ? "Make Inactive" : "Make Active"}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ManageUsers;

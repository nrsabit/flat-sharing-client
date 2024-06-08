"use client";

import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import FSForm from "@/components/Forms/FSForm";
import FSInput from "@/components/Forms/FSInput";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useChangePasswordMutation } from "@/redux/api/usersApi";
import LoadingPage from "@/app/loading";

const changePasswordSchema = z.object({
  oldPassword: z.string().min(6, "Password should be at leaset 6 characters"),
  newPassword: z.string().min(6, "Password should be at leaset 6 characters"),
  confirmPassword: z
    .string()
    .min(6, "Password should be at leaset 6 characters"),
});

const ChangePassword = () => {
  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const router = useRouter();

  const submit: SubmitHandler<FieldValues> = async (values) => {
    if (values.newPassword !== values.confirmPassword) {
      toast.error("Password Confirmation Failed");
      return;
    }

    try {
      const res = await changePassword(values).unwrap();
      if (res?.id) {
        toast.success("Password Changed Successfully");
      } else {
        toast.error("Something went wrong, Please recheck the old password");
      }
      router.refresh();
    } catch (err: any) {
      toast.error(err?.message || "Something went wrong");
    }
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <Container>
      <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
        <Box
          sx={{
            maxWidth: 600,
            bgcolor: "#e7e7e7",
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
            <Box>
              <Image src={logo} alt="Logo" height={150} width={150}></Image>
            </Box>
            <Box mt={1}>
              <Typography variant="h6" fontWeight={600}>
                Change Password
              </Typography>
            </Box>
          </Stack>

          <FSForm
            onSubmit={submit}
            resolver={zodResolver(changePasswordSchema)}
          >
            <Grid container spacing={2} my={2}>
              <Grid item md={12}>
                <FSInput
                  name="oldPassword"
                  label="Old Password"
                  type="password"
                />
              </Grid>
              <Grid item md={12}>
                <FSInput
                  name="newPassword"
                  type="password"
                  label="New Password"
                />
              </Grid>
              <Grid item md={12}>
                <FSInput
                  name="confirmPassword"
                  type="password"
                  label="Confirm Password"
                />
              </Grid>
            </Grid>

            <Button sx={{ margin: "16px 0px" }} type="submit">
              Change Password
            </Button>
          </FSForm>
        </Box>
      </Stack>
    </Container>
  );
};

export default ChangePassword;

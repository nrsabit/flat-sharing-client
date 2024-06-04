"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import FSForm from "@/components/Forms/FSForm";
import FSInput from "@/components/Forms/FSInput";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { registerUser } from "@/services/actions/registerUser";
import { storeUserInfo } from "@/services/auth.services";
import { loginUser } from "@/services/actions/loginUser";
import { zodResolver } from "@hookform/resolvers/zod";

const registerValidationSchema = z.object({
  userName: z.string(),
  email: z.string().email("Must be a valid email"),
  password: z.string().min(6, "Password should be at leaset 6 characters"),
});

const RegisterPage = () => {
  const router = useRouter();

  const submit = async (values: FieldValues) => {
    try {
      const res = await registerUser(values);
      if (res?.data?.id) {
        toast.success(res?.message, { duration: 5000 });
        const result = await loginUser({
          password: values.password,
          email: values.email,
        });
        if (result?.data?.accessToken) {
          storeUserInfo(result?.data?.accessToken);
          router.push("/");
        }
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };
  return (
    <Container>
      <Stack
        sx={{ height: "100vh", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            bgcolor: "#e7e7e7",
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
                Sign Up
              </Typography>
            </Box>
          </Stack>

          <FSForm
            onSubmit={submit}
            defaultValues={{ userName: "", email: "", password: "" }}
            resolver={zodResolver(registerValidationSchema)}
          >
            <Grid container spacing={2} my={2}>
              <Grid item md={12}>
                <FSInput name="userName" label="User Name" fullWidth={true} />
              </Grid>
              <Grid item md={6}>
                <FSInput
                  name="email"
                  label="Email"
                  type="email"
                  fullWidth={true}
                />
              </Grid>
              <Grid item md={6}>
                <FSInput
                  name="password"
                  type="password"
                  label="Password"
                  fullWidth={true}
                />
              </Grid>
            </Grid>
            <Button sx={{ margin: "16px 0px" }} type="submit">
              Sign Up
            </Button>
            <Box>
              <Typography component="p" fontWeight={300}>
                Do you already have an account? <Link href="/login">Login</Link>
              </Typography>
            </Box>
          </FSForm>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;

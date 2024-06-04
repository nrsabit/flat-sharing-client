"use client";

import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import FSForm from "@/components/Forms/FSForm";
import FSInput from "@/components/Forms/FSInput";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { loginUser } from "@/services/actions/loginUser";
import { toast } from "sonner";
import { storeUserInfo } from "@/services/auth.services";
import { zodResolver } from "@hookform/resolvers/zod";

export type TLoginFormValues = {
  email: string;
  password: string;
};

const loginValidationSchema = z.object({
  email: z.string().email("Must be a valid email"),
  password: z.string().min(6, "Password should be at leaset 6 characters"),
});

const LoginPage = () => {
  const router = useRouter();

  const submit: SubmitHandler<FieldValues> = async (values) => {
    try {
      const res = await loginUser(values);
      if (res?.data?.accessToken) {
        toast.success(res?.message, { duration: 5000 });
        storeUserInfo(res?.data?.accessToken);
        router.push("/");
      } else {
        toast.error(res?.message, { duration: 5000 });
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
                Login
              </Typography>
            </Box>
          </Stack>

          <FSForm
            onSubmit={submit}
            resolver={zodResolver(loginValidationSchema)}
            defaultValues={{
              email: "",
              password: "",
            }}
          >
            <Grid container spacing={2} my={2}>
              <Grid item md={6}>
                <FSInput name="email" label="Email" type="email" />
              </Grid>
              <Grid item md={6}>
                <FSInput name="password" type="password" label="Password" />
              </Grid>
            </Grid>

            <Button sx={{ margin: "16px 0px" }} type="submit">
              Login
            </Button>
            <Box>
              <Typography component="p" fontWeight={300}>
                Don&apos;t have an account?{" "}
                <Link href="/register">Create an account</Link>
              </Typography>
            </Box>
          </FSForm>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;

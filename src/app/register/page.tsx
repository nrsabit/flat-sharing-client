"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import FSForm from "@/components/Forms/FSForm";
import FSInput from "@/components/Forms/FSInput";

const RegisterPage = () => {
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

          <FSForm onSubmit={() => {}}>
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

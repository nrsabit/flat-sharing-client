"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import ProfileModal from "./components/ProfileModal";
import { useGetMeQuery } from "@/redux/api/usersApi";

const MyProfile = () => {
  const { data: userInfo } = useGetMeQuery({});

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
            <Box mt={1}>
              <Typography variant="h5" fontWeight={600}>
                My Profile
              </Typography>
            </Box>
          </Stack>

          <Box my={2}>
            <Typography variant="h6">
              User Name: {(userInfo as any)?.userName}
            </Typography>
            <Typography variant="h6">
              Email: {(userInfo as any)?.email}
            </Typography>
          </Box>
          <ProfileModal user={userInfo} />
        </Box>
      </Stack>
    </Container>
  );
};

export default MyProfile;

"use client";

import { getUserInfo } from "@/services/auth.services";
import { Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AuthLinks = () => {
  const userInfo = getUserInfo();
  const pathname = usePathname();

  return (
    <>
      {userInfo?.email ? (
        <Typography
          color="primary.main"
          component={Link}
          href="/my-profile"
          sx={{
            ...(pathname === "/my-profile"
              ? {
                  color: "secondary.main",
                  borderBottom: "2px solid #5BE1E6",
                }
              : {}),
          }}
        >
          My Profile
        </Typography>
      ) : (
        <Typography
          color="primary.main"
          component={Link}
          href="/login"
          sx={{
            ...(pathname === "/login"
              ? {
                  color: "secondary.main",
                  borderBottom: "2px solid #5BE1E6",
                }
              : {}),
          }}
        >
          Login
        </Typography>
      )}
    </>
  );
};

export default AuthLinks;

"use client";

import { getUserInfo } from "@/services/auth.services";
import { Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const AuthLinks = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const userInfo = getUserInfo();
    setUserInfo(userInfo);
  }, []);

  const pathname = usePathname();

  return (
    <>
      {(userInfo as any)?.email ? (
        <Typography
          color="primary.main"
          component={Link}
          href="/dashboard/my-profile"
          sx={{
            ...(pathname === "/dashboard/my-profile"
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

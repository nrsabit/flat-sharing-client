import { Box, List, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItems";
import SidebarItems from "./SidebarItems";
import { useEffect, useState } from "react";
import { getUserInfo } from "@/services/auth.services";
import logo from "@/assets/images/logo.png";

const Sidebar = () => {
  const [userRole, setUserRole] = useState("");
  useEffect(() => {
    const { role } = getUserInfo() as any;
    setUserRole(role);
  }, []);

  return (
    <Box minHeight="100vh" bgcolor="#e7e7e7">
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        py={1}
        my={1}
        gap={1}
        component={Link}
        href="/"
      >
        <Image height={120} width={120} src={logo} alt="Logo" />
      </Stack>
      <List>
        {drawerItems(userRole as string).map((item, index) => (
          <SidebarItems key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;

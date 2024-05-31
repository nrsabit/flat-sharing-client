"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Stack } from "@mui/material";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about-us" },
  { name: "Login", link: "/login" },
  { name: "My Profile", link: "/my-profile" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setIsOpen(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setIsOpen(null);
  };

  return (
    <AppBar position="static" sx={{ background: "#e7e7e7" }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Image src={logo} alt="logo" height={100} width={100} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "primary.main" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={isOpen}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(isOpen)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {menuItems.map((item) => (
                <MenuItem key={item.name} onClick={handleCloseNavMenu}>
                  <Typography
                    component={Link}
                    href={item.link}
                    textAlign="center"
                  >
                    {item.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          >
            <Image src={logo} alt="logo" height={100} width={100} />
          </Typography>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap={4}
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {menuItems.map((item) => (
              <Typography
                color="primary.main"
                key={item.name}
                component={Link}
                href={item.link}
                sx={{
                  ...(pathname === item.link
                    ? {
                        color: "secondary.main",
                        borderBottom: "2px solid #5BE1E6"
                      }
                    : {}),
                }}
              >
                {item.name}
              </Typography>
            ))}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

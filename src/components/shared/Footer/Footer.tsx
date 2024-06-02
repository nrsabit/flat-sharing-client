import {
  Box,
  Container,
  Typography,
  Link,
  Grid,
  IconButton,
} from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        p: 6,
        mt: 8,
      }}
      component="footer"
    >
      <Container maxWidth="xl" sx={{ color: "#e7e7e7" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Information
            </Typography>
            <Typography>Email: homestay@web.com</Typography>
            <Typography>Phone: +123 456 7890</Typography>
            <Box mt={2}>
              <IconButton href="https://facebook.com" color="inherit">
                <Facebook />
              </IconButton>
              <IconButton href="https://twitter.com" color="inherit">
                <Twitter />
              </IconButton>
              <IconButton href="https://instagram.com" color="inherit">
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Additional Links
            </Typography>
            <Link
              href="#"
              color="#e7e7e7"
              variant="body2"
              display="block"
              gutterBottom
            >
              Terms of Use
            </Link>
            <Link
              href="#"
              color="#e7e7e7"
              variant="body2"
              display="block"
              gutterBottom
            >
              Privacy Policy
            </Link>
          </Grid>
          <Grid item xs={12} md={4} display="flex" justifyContent="center" alignItems="center">
            <Box mt={{ xs: 4, md: 0 }}>
              <Typography variant="body2" color="#e7e7e7">
                &copy; {new Date().getFullYear()} HomeStay. All rights reserved.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;

import React from "react";
import {
  Box,
  Typography,
  Grid,
  Link,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  Paper,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const AboutPage = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>

      <Paper sx={{ p: 2, mb: 4, bgcolor: "#e7e7e7" }}>
        <Typography variant="h6" gutterBottom>
          Mission Statement
        </Typography>
        <Typography variant="body1">
          Welcome to HomeStay, the premier platform for flat sharing and rental
          opportunities. Our mission is to make finding and sharing flats
          easier, more efficient, and more enjoyable. Whether you are looking to
          request a flat or share a new flat, our user-friendly interface and
          dedicated team are here to support you every step of the way.
        </Typography>
      </Paper>

      <Paper sx={{ p: 2, mb: 4, bgcolor: "#e7e7e7" }}>
        <Typography variant="h6" gutterBottom>
          Team Information
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Md Emon - Founder & CEO"
              secondary="Emon is a very hard working person, he had the idea to build this website to make the life more easier for the people who have issues finding their suitable flats."
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemText
              primary="Md Jakir - Chief Technology Officer"
              secondary="Jane leads our tech team, ensuring that the platform is always running smoothly and incorporating the latest technology to enhance user experience."
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemText
              primary="Md Mamun - Lead Developer"
              secondary="Mamun leads the main development part for the website, and he has his team, so by their hardwork the website is getting up to date"
            />
          </ListItem>
        </List>
      </Paper>

      <Paper sx={{ p: 2, bgcolor: "#e7e7e7" }}>
        <Typography variant="h6" gutterBottom>
          Contact Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" gutterBottom>
              <EmailIcon /> Email:{" "}
              <Link href="mailto:support@yourwebsitename.com">
                hello@homestay.com
              </Link>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <PhoneIcon /> Phone: +1 (333) 123-4567
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" gutterBottom>
              <FacebookIcon />{" "}
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener"
              >
                Facebook
              </Link>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <TwitterIcon />{" "}
              <Link
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener"
              >
                Twitter
              </Link>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <InstagramIcon />{" "}
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener"
              >
                Instagram
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default AboutPage;

"use client"
import React from "react";
import Slider from "react-slick";
import { Box, Typography, Paper, Avatar } from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "This platform is fantastic! It made finding a flat so easy and hassle-free.",
    avatar: "https://res.cloudinary.com/dg4spmx5h/image/upload/v1717801465/potrait4_zl9t9r.jpg",
    rating: 5,
  },
  {
    name: "Jane Smith",
    feedback:
      "Highly recommend this service! The customer support was amazing.",
    avatar: "https://res.cloudinary.com/dg4spmx5h/image/upload/v1717801465/potrait1_zb7tjn.jpg",
    rating: 4,
  },
  {
    name: "Emily Johnson",
    feedback: "A very efficient and user-friendly platform for flat sharing.",
    avatar: "https://res.cloudinary.com/dg4spmx5h/image/upload/v1717801464/potrait2_qakmnx.jpg",
    rating: 5,
  },
  {
    name: "Michael Brown",
    feedback: "Found a great flat through this site. Excellent experience!",
    avatar: "https://res.cloudinary.com/dg4spmx5h/image/upload/v1717801464/potrait3_xrup1y.webp",
    rating: 4,
  },
];

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, index) =>
    index < rating ? (
      <Star key={index} color="primary" />
    ) : (
      <StarBorder key={index} color="primary" />
    )
  );
};

const TestimonialsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box sx={{ p: 4, mt: 4, bgcolor: "#e7e7e7", borderRadius: "8px" }}>
      <Typography variant="h4" gutterBottom align="center">
        Testimonials
      </Typography>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Box
            key={index}
            sx={{ display: "flex", justifyContent: "center", p: 2 }}
          >
            <Paper elevation={3} sx={{ p: 3, maxWidth: 600, mx: "auto" }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Avatar
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  sx={{ mr: 2 }}
                />
                <Typography variant="h6">{testimonial.name}</Typography>
              </Box>
              <Box sx={{ display: "flex", mb: 2 }}>
                {renderStars(testimonial.rating)}
              </Box>
              <Typography variant="body1">{testimonial.feedback}</Typography>
            </Paper>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default TestimonialsSection;

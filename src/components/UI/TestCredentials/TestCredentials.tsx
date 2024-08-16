// components/TestEmailsPasswords.js
import React from 'react';
import { Box, Grid, Typography, Divider, Paper } from '@mui/material';

const roles = [
  {
    role: 'Admin',
    email: 'naeemur@rahman.com',
    password: '12345678',
  },
  {
    role: 'User',
    email: 'zakirhossain@gmail.com',
    password: '12345678',
  },
];

const TestEmailsPasswords = () => {
  return (
    <Paper elevation={3} sx={{ padding: '2rem', margin: '2rem auto', maxWidth: '600px' }}>
      <Typography variant="h5" align="center" gutterBottom>
        Test Email and Passwords
      </Typography>
      <Grid container spacing={2}>
        {roles.map((role, index) => (
          <Grid item xs={12} key={index}>
            <Box textAlign="center">
              <Typography variant="h6">{role.role}</Typography>
              <Typography variant="body1">Email: {role.email}</Typography>
              <Typography variant="body1">Password: {role.password}</Typography>
            </Box>
            {index < roles.length - 1 && <Divider sx={{ marginY: '1.5rem' }} />}
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default TestEmailsPasswords;

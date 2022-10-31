import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const PageLayout = ({ title, icon, children }) => (
  <Box
    sx={{
      marginTop: 5,
      marginBottom: 5,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>{icon}</Avatar>
    <Typography component='h1' variant='h5'>
      {title}
    </Typography>
    {children}
  </Box>
);

export default PageLayout;

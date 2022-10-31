import React from 'react';
import MUIContainer from '@mui/material/Container';
import Paper from '@mui/material/Paper';

const Container = ({ children }) => (
  <MUIContainer
    disableGutters
    maxWidth='sm'
    component='section'
    sx={{ pt: 8, pb: 6 }}
  >
    <Paper
      variant='outlined'
      sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
    >
      {children}
    </Paper>
  </MUIContainer>
);

export default Container;

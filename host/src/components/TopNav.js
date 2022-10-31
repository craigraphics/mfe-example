import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1d2e3f',
    },
  },
});

const TopNav = () => (
  <ThemeProvider theme={darkTheme}>
    <AppBar position='static' color='primary' enableColorOnDark elevation={0}>
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography variant='h6' color='inherit' noWrap sx={{ flexGrow: 1 }}>
          Microfrontend Example
        </Typography>
        <nav>
          <Link
            underline='none'
            variant='button'
            color='text.primary'
            sx={{ my: 1, mx: 1.5 }}
            to='/'
            component={RouterLink}
          >
            Home
          </Link>

          <Link
            underline='none'
            variant='button'
            color='text.primary'
            href='#'
            sx={{ my: 1, mx: 1.5 }}
            component={RouterLink}
            to='/login'
          >
            Login
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  </ThemeProvider>
);

export default TopNav;

import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PageLayout from '../components/PageLayout';

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('form submitted');
  };

  return (
    <PageLayout title='Login' icon={<LockOutlinedIcon />}>
      <Box component='form' onSubmit={handleSubmit} noValidate>
        <TextField
          margin='normal'
          required
          fullWidth
          id='email'
          label='Email Address'
          name='email'
          autoComplete='off'
          autoFocus
          type='email'
        />
        <TextField
          margin='normal'
          required
          fullWidth
          name='password'
          label='Password'
          type='password'
          id='password'
          autoComplete='off'
        />
        <Button
          type='submit'
          fullWidth
          variant='contained'
          sx={{ mt: 3, mb: 2 }}
        >
          Login
        </Button>
      </Box>
    </PageLayout>
  );
};

export default Login;

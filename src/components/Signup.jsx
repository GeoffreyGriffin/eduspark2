import React, { useState } from 'react';
import { Grid, Typography, TextField, Button, IconButton, Box, Snackbar, InputAdornment } from '@mui/material';
import { ArrowBack as ArrowBackIcon, Visibility, VisibilityOff } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({ email: '', phone: '', password: '' });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = 'http://127.0.0.1:5000/signup'; // Update this URL to match your backend route
    const body = JSON.stringify({ email: formData.email, phone: formData.phone, password: formData.password });

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      });

      if (response.ok) {
        const result = await response.json();
        setSuccessMessage('User signed up successfully!');
        setTimeout(() => {
          navigate('/login', { replace: true });
        }, 3000);
      } else {
        const errorResult = await response.json();
        setError(errorResult.error || 'Signup failed. Please check your details.');
      }
    } catch (error) {
      setErrorMessage('Error: ' + error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSnackbarClose = () => {
    setSuccessMessage('');
    setErrorMessage('');
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <Grid item xs={12} sm={6}>
        <Box sx={{ padding: 4, width: '100%', bgcolor: 'background.paper', borderRadius: '8px' }}>
          <IconButton onClick={() => navigate(-1)} style={{ marginBottom: '1rem' }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h4" style={{ marginBottom: '1rem' }}>Sign Up</Typography>
          {error && <Typography color="error" style={{ marginBottom: '1rem' }}>{error}</Typography>}
          <form onSubmit={handleSubmit}>
            <TextField
            label="username"
            variant='outlined'
            fullWidth margin='normal'
            name='Username'
            value={formData.email}
            onChange={handleInputChange}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <TextField
              label="Phone"
              variant="outlined"
              fullWidth
              margin="normal"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <TextField
              label="Password"
              type={passwordVisible ? "text" : "password"}
              variant="outlined"
              fullWidth
              margin="normal"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility}>
                      {passwordVisible ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '1rem' }}>
              Sign Up
            </Button>
          </form>
          <Typography variant="body2" style={{ marginTop: '1rem', textAlign: 'center' }}>
            Already have an account? <Link to="/login" style={{ color: '#007BFF' }}>Login</Link>
          </Typography>
        </Box>
      </Grid>
      <Snackbar
        open={!!successMessage || !!errorMessage}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={successMessage || errorMessage}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        ContentProps={{
          style: {
            backgroundColor: successMessage ? '#4CAF50' : '#D32F2F', // Green for success, Red for error
            color: 'white'
          },
        }}
      />
    </Grid>
  );
};

export default SignUp;
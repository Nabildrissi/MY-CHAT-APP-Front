import React from 'react';
import { Container, TextField, Button, Checkbox, FormControlLabel, Typography, Box } from '@mui/material';
import { AccountCircle, Lock } from '@mui/icons-material';
import './login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()

  const handleClick = ()=> {
    navigate('/chat')
  }
  return (
    <div className="login-background">
      <Container maxWidth="xs" className="login-container">
        <Box className="login-box" boxShadow={3} p={4} borderRadius={2}>
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>
          <Box mt={3}>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <Box display="flex" alignItems="center" mr={1}>
                    <AccountCircle color="action" />
                  </Box>
                )
              }}
              className="input-field"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <Box display="flex" alignItems="center" mr={1}>
                    <Lock color="action" />
                  </Box>
                )
              }}
              className="input-field"
              margin="normal"
            />
            <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
              <FormControlLabel control={<Checkbox color="primary" />} label="Remember me" />
              <Typography variant="body2" className="forgot-password">
                Forgot password?
              </Typography>
            </Box>
            <Button
            onClick={handleClick}
              fullWidth
              variant="contained"
              color="primary"
              className="login-button"
            >
              LOGIN
            </Button>
            <Typography variant="body2" align="center" mt={3}>
              Don't have an account?<a href='/register'> <span className="register-link" >Register</span></a>
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
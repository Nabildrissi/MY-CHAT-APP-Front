import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff4081', // Custom color for the button
    },
    background: {
      default: '#121212', // Dark background
    },
  },
  typography: {
    h4: {
      fontWeight: 'bold',
    },
    subtitle1: {
      color: '#888', // Subdued text color
    },
  },
});

function Welcome() {
  const [username, setUsername] = useState('');

  const handleEnter = () => {
    // Handle login
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" sx={{ display: 'flex', height: '100vh', alignItems: 'center' }}>
        <Box
          sx={{
            width: '100%',
            textAlign: 'center',
            backgroundColor: '#1e1e1e',
            padding: '2rem',
            borderRadius: '8px',
          }}
        >
          <Typography variant="h4" gutterBottom>
            Welcome <span role="img" aria-label="wave">👋</span>
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Set a username to get started
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Username"
            InputProps={{
              style: { color: '#fff', backgroundColor: '#2c2c2c', borderRadius: '4px' },
            }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ marginBottom: '1.5rem' }}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleEnter}
            sx={{ height: '50px', borderRadius: '25px' }}
          >
            Enter
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Welcome;
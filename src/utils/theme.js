import { createTheme, Box } from '@mui/material';
import { styled } from '@mui/system';

// Define the frosted glass effect theme
export const theme = createTheme({
  palette: {
    background: {
      default: '#003366', // Dark blue background for the app
    },
    text: {
      primary: '#ffffff', // Light text color
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(173, 216, 230, 0.6)', // Transparent white for the frosted glass effect
          backdropFilter: 'blur(10px)', // Frosted glass effect
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', // Subtle shadow
          color: '#e0ffff',
        },
      },
    },
  },
});

// Styled container using Box
export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default, // Background from the theme
  flexDirection: 'column',
  padding: '20px',
}));
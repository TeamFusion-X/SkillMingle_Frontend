import { createTheme, Box } from '@mui/material';
import { styled } from '@mui/system';

export const theme = createTheme({
  palette: {
    background: {
      default: '#003366', 
    },
    text: {
      primary: '#ffffff',
      secondary: "#B0BEC5", 
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(173, 216, 230, 0.3)', 
          backdropFilter: 'blur(10px)',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          color: '#e0ffff',
        },
      },
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    primaryText: {
      color: "#FFFFFF", // Primary text (bright white)
    },
    secondaryText: {
      color: "#CCCCCC", // Secondary text (soft gray)
    },
    accentText: {
      color: "#00FFFF", // Accent text (cyan)
    },
    mutedText: {
      color: "rgba(255, 255, 255, 0.7)", // Muted text
    },
  },
});

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 'auto',
  backgroundColor: theme.palette.background.default, // Background from the theme
  flexDirection: 'column',
  padding: '20px',
}));
import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Paper
} from '@mui/material';
import { Send as SendIcon, Refresh as RefreshIcon } from '@mui/icons-material';
import { getResponseAPI } from '../../services/genAPI';

const QueryBot = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [showReset, setShowReset] = useState(false);

  const handleQuerySubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      const response = await getResponseAPI(query);
      console.log(response);

      setResponse(response); 
      setShowReset(true);
    } catch (error) {
      console.error('Error fetching response:', error);
      setResponse('Sorry, there was an error processing your query. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setQuery('');
    setResponse('');
    setShowReset(false);
  };

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box 
        sx={{ 
          flexGrow: 1, 
          overflowY: 'auto',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}
      >
        {query && (
          <Paper 
            elevation={1}
            sx={{ 
              p: 2, 
              alignSelf: 'flex-end',
              maxWidth: '80%',
              background: 'rgba(25, 118, 210)',
              borderRadius: '12px 12px 0 12px'
            }}
          >
            <Typography variant="body1">{query}</Typography>
          </Paper>
        )}

        {response && (
          <Paper 
            elevation={1}
            sx={{ 
              p: 2, 
              alignSelf: 'flex-start',
              maxWidth: '80%',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '12px 12px 12px 0'
            }}
          >
            <Typography variant="body1" sx={{ color: '#e0ffff' }}>
              {response}
            </Typography>
          </Paper>
        )}

        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
            <CircularProgress size={24} />
          </Box>
        )}
      </Box>

      {/* Reset Button */}
      {showReset && (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
          <Button
            variant="outlined"
            startIcon={<RefreshIcon />}
            onClick={handleReset}
            sx={{
              borderRadius: '20px',
              textTransform: 'none',
              color: '#e0ffff',
              borderColor: '#e0ffff',
              '&:hover': {
                borderColor: '#fff',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            Have another query?
          </Button>
        </Box>
      )}

      {/* Query Input Area */}
      <Box 
        component="form" 
        onSubmit={handleQuerySubmit}
        sx={{ 
          p: 2, 
          display: 'flex', 
          gap: 1,
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type your query here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          disabled={loading || showReset}
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              '& fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.2)',
              },
              '&:hover fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.3)',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'primary.main',
              },
            },
            '& .MuiInputBase-input': {
              color: '#e0ffff',
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          disabled={loading || showReset || !query.trim()}
          sx={{
            minWidth: '50px',
            height: '56px',
            borderRadius: '8px',
          }}
        >
          <SendIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default QueryBot;
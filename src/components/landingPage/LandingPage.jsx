import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box, Container, Grid } from "@mui/material";
function LandingPage(){
  return (
    <div>
    {/* Navbar */}
    <AppBar position="static" style={{ backgroundColor: "white", color: "black", boxShadow: "none" }}>
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" style={{ flexGrow: 1, fontFamily: "'Poppins', sans-serif", fontWeight: "bold" }}>
          SkillMingle
        </Typography>

        {/* Login and Signup Buttons */}
        <Button component={Link} to="/login" color="inherit" style={{ marginRight: "10px" }}>
          Login
        </Button>
        <Button component={Link} to="/signup" variant="contained" color="primary">
          Signup
        </Button>
      </Toolbar>
    </AppBar>

    {/* Hero Section */}
    <Container maxWidth="lg" style={{ marginTop: "40px", textAlign: "center" }}>
      <Typography variant="h2" style={{ fontWeight: "bold", marginBottom: "20px", fontFamily: "'Poppins', sans-serif" }}>
        Welcome to SkillMingle
      </Typography>
      <Typography variant="h6" style={{ color: "#555", marginBottom: "40px" }}>
        Connect, learn, and share your skills with a vibrant community of learners.
      </Typography>
      <Button component={Link} to="/signup" variant="contained" color="primary" size="large" style={{ marginRight: "10px" }}>
        Get Started
      </Button>
      <Button component={Link} to="/" variant="outlined" color="primary" size="large">
        Learn More
      </Button>
    </Container>

    {/* Features Section */}
    <Container maxWidth="lg" style={{ marginTop: "60px" }}>
      <Typography variant="h4" style={{ fontWeight: "bold", marginBottom: "30px", textAlign: "center" }}>
        Key Features
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Box textAlign="center" padding="20px" border="1px solid #ddd" borderRadius="8px">
            <Typography variant="h6" style={{ fontWeight: "bold", marginBottom: "10px" }}>
              Shared Growth 
            </Typography>
            <Typography variant="body1" style={{ color: "#555" }}>
              Create profiles, highlight skills, and start connecting.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box textAlign="center" padding="20px" border="1px solid #ddd" borderRadius="8px">
            <Typography variant="h6" style={{ fontWeight: "bold", marginBottom: "10px" }}>
              Learn new Skills
            </Typography>
            <Typography variant="body1" style={{ color: "#555" }}>
              Discover skills you want to learn or teach with powerful search tools.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box textAlign="center" padding="20px" border="1px solid #ddd" borderRadius="8px">
            <Typography variant="h6" style={{ fontWeight: "bold", marginBottom: "10px" }}>
              Real-time Messaging
            </Typography>
            <Typography variant="body1" style={{ color: "#555" }}>
              Communicate instantly with other users to plan your skill exchange.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box textAlign="center" padding="20px" border="1px solid #ddd" borderRadius="8px">
            <Typography variant="h6" style={{ fontWeight: "bold", marginBottom: "10px" }}>
              Progress Tracking
            </Typography>
            <Typography variant="body1" style={{ color: "#555" }}>
              Monitor your learning journey and track achievements.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box textAlign="center" padding="20px" border="1px solid #ddd" borderRadius="8px">
            <Typography variant="h6" style={{ fontWeight: "bold", marginBottom: "10px" }}>
              Community Engagement
            </Typography>
            <Typography variant="body1" style={{ color: "#555" }}>
              Join discussions, participate in groups, and build connections.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box textAlign="center" padding="20px" border="1px solid #ddd" borderRadius="8px">
            <Typography variant="h6" style={{ fontWeight: "bold", marginBottom: "10px" }}>
              Rating System
            </Typography>
            <Typography variant="body1" style={{ color: "#555" }}>
              Provide feedback and help others choose the best collaborators.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>

    {/* Footer */}
    <Box style={{ backgroundColor: "#f5f5f5", padding: "20px", marginTop: "60px", textAlign: "center" }}>
      <Typography variant="body1" style={{ color: "#555" }}>
        &copy; {new Date().getFullYear()} SkillMingle. All rights reserved.
      </Typography>
    </Box>
  </div>
  )
}

export default LandingPage;
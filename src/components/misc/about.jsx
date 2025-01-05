import { Box, Grid } from "@mui/material";
import AboutCard from "./aboutCard";

const About = () => {
  return (
    <div>
      <Box
        sx={{
            marginTop: { xs: '120px', sm: '160px', md: '200px' }, 
            paddingX: 2, 
            width: '100%',
            height : '100vh',
        }}
      >
        <Grid container spacing={2}>
          <AboutCard />
          <AboutCard />
          <AboutCard />
        </Grid>
      </Box>
    </div>
  );
};

export default About;

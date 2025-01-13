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
          <AboutCard 
            profilePhoto="https://media.licdn.com/dms/image/v2/D5603AQErJPMfhRFatA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719778982288?e=1742428800&v=beta&t=SVTDSR3QGSLrNfomkK5662rv5qLpddbQV1qUopHG29U"
            name="Divya Prakash Jha"
            title="Software Engineer"
            bio="Passionate about technology"
            email="prakahsdivya0607@gmail.com"
            github="https://github.com/DivyaPrakashJha"
            linkedin="https://www.linkedin.com/in/prakash-divya/"
            instagram=""
            twitter=""

          />
          <AboutCard 
            profilePhoto="https://media.licdn.com/dms/image/v2/D5603AQFvQEGrAec8-w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726460168596?e=1742428800&v=beta&t=0h3Si_DBIzba3nJQ4PiScRs-NLoa5Pmz672QSS0QzKg"
            name="Deepesh Tiwari"
            title="Software Engineer"
            bio="Passionate about technology"
            email=""
            github="https://github.com/Deepesh-Tiwari"
            linkedin="https://www.linkedin.com/in/deepesh-tiwari-666752229/"
            instagram=""
            twitter=""
          />
          <AboutCard 
            profilePhoto="https://avatars.githubusercontent.com/u/94732055?v=4"
            name="Arvind Singh Rathore"
            title="Software Engineer"
            bio="Passionate about technology "
            email=""
            github="https://github.com/arvindsrathore"
            linkedin="https://www.linkedin.com/in/arvindsinghrathore212002/"
            instagram=""
            twitter=""
          />
        </Grid>
      </Box>
    </div>
  );
};

export default About;

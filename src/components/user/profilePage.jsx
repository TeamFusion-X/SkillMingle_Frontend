import { Box, Grid, Typography, Paper, Chip } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import PropTypes from 'prop-types';
import userdataPropType from './userDataProptype';

const InfoRow = ({ icon, label, value }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
    {icon}
    <Box>
      <Typography variant="caption" color="text.secondary">
        {label}
      </Typography>
      <Typography>{value}</Typography>
    </Box>
  </Box>
);

InfoRow.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const ProfilePage = (props) => {

    console.log(props.userdata);
    const userInfo = props.userdata;

  return (
    <Box sx={{width: '100%' }}>
      <Grid container spacing={4}>
        
        {/* Personal Information Section */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ 
            p: 3, 
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            height: '100%',
            overflow: 'hidden'
          }}>
            <Typography variant="h5" sx={{ mb: 3, wordBreak: 'break-word' }}>
              Personal Information
            </Typography>
            
            <InfoRow
              icon={<PersonIcon sx={{ color: 'text.secondary', flexShrink: 0 }} />}
              label="Username"
              value={userInfo.username}
            />
            
            <InfoRow
              icon={<EmailIcon sx={{ color: 'text.secondary', flexShrink: 0 }} />}
              label="Email"
              value={userInfo.email}
            />
            
            <InfoRow
              icon={<NotificationsIcon sx={{ color: 'text.secondary', flexShrink: 0 }} />}
              label="Requests Received"
              value={userInfo.requestsReceived.length}
            />

            <InfoRow
              icon={<ChatIcon sx={{ color: 'text.secondary', flexShrink: 0 }} />}
              label="Teaching Conversations"
              value={userInfo.learningConversations.length}
            />
          </Paper>
        </Grid>

        {/* Skills Section */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ 
            p: 3, 
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            height: '100%'
          }}>
            <Typography variant="h5" sx={{ mb: 3 }}>
              Skills
            </Typography>
            
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Skilled In
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {userInfo.userSkills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' }
                    }}
                  />
                ))}
              </Box>
            </Box>
            
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Skills to Teach
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {userInfo.skillsToTeach.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' }
                    }}
                  />
                ))}
              </Box>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Skills to Learn
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {userInfo.skillsToLearn.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' }
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Projects Section */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
            <Typography variant="h5" sx={{ mb: 3 }}>
              Reviews and Ratings
            </Typography>
            <Grid container spacing={2}>
              
                <Grid item xs={12} md={6}>
                  <Paper sx={{ 
                    p: 2, 
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    height: '100%'
                  }}>
                    <Typography variant="h6">Reviews</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {userInfo.reviews.length}
                    </Typography>
                  </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Paper sx={{ 
                    p: 2, 
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    height: '100%'
                  }}>
                    <Typography variant="h6">Rating</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {userInfo.teachingRating}
                    </Typography>
                  </Paper>
                </Grid>
              
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

ProfilePage.propTypes = {
  userdata: userdataPropType.isRequired,
};

export default ProfilePage;
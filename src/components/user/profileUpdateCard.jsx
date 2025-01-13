import { Box, Grid, Typography, Paper, TextField, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import { useForm, Controller } from "react-hook-form";
import PropTypes from "prop-types";
import userdataPropType from "./userDataProptype";
import { useState } from "react";
import SkillInput from "./skillInput";

const ProfileUpdateCard = (props) => {
  const [userInfo, setUserInfo] = useState(props.userdata);
  const onSubmitHandler = props.onSubmitHandler;

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      username: userInfo.username,
      email: userInfo.email,
      userSkills: userInfo.userSkills || [],
      skillsToTeach: userInfo.skillsToTeach || [],
      skillsToLearn: userInfo.skillsToLearn || [],
    },
  });

  const handleSkillUpdate = (skillType, newSkill) => {
    const skillMap = {
      userSkills: "userSkills",
      teachSkills: "skillsToTeach",
      learnSkills: "skillsToLearn",
    };

    const fieldName = skillMap[skillType];
    const updatedSkills = [...userInfo[fieldName], newSkill];

    setUserInfo((prev) => ({
      ...prev,
      [fieldName]: updatedSkills,
    }));
    setValue(fieldName, updatedSkills);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={4}>
        {/* Personal Information Section */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{ p: 3, bgcolor: "rgba(255, 255, 255, 0.05)", height: "100%" }}
          >
            <Typography variant="h5" sx={{ mb: 3 }}>
              Personal Information
            </Typography>

            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <PersonIcon sx={{ color: "text.secondary" }} />
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Username"
                    variant="standard"
                    InputLabelProps={{ shrink: true }}
                    error={!!errors.username}
                    helperText={errors.username?.message}
                  />
                )}
              />
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              <EmailIcon sx={{ color: "text.secondary" }} />
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    variant="standard"
                    InputLabelProps={{ shrink: true }}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                )}
              />
            </Box>
          </Paper>
        </Grid>

        {/* Skills Section */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{ p: 3, bgcolor: "rgba(255, 255, 255, 0.05)", height: "100%" }}
          >
            <Typography variant="h5" sx={{ mb: 3 }}>
              Skills
            </Typography>

            <SkillInput
              title="Skilled In"
              skills={userInfo.userSkills}
              onAddSkill={(skill) => handleSkillUpdate("userSkills", skill)}
            />

            <SkillInput
              title="Skills to Teach"
              skills={userInfo.skillsToTeach}
              onAddSkill={(skill) => handleSkillUpdate("teachSkills", skill)}
            />

            <SkillInput
              title="Skills to Learn"
              skills={userInfo.skillsToLearn}
              onAddSkill={(skill) => handleSkillUpdate("learnSkills", skill)}
            />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmitHandler)} // Fixed: Reversed the order
              sx={{
                textTransform: "none",
                backgroundColor: "#1976d2",
                "&:hover": {
                  backgroundColor: "#145ca4",
                },
                padding: "8px 16px",
                borderRadius: "4px",
              }}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

ProfileUpdateCard.propTypes = {
  userdata: userdataPropType.isRequired,
  onSubmitHandler: PropTypes.func.isRequired,
};

export default ProfileUpdateCard;
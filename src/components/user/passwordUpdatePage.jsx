import { Box, Grid, Typography, Paper, TextField, Button } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useForm, Controller } from "react-hook-form";
import PropTypes from "prop-types";

const PasswordUpdatePage = (props) => {
  const onSubmitHandler = props.onSubmitHandler;

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      passwordCurrent: "",
      password: "",
      passwordConfirm: "",
    },
  });
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={4}>
        {/* Update Password Section */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{ p: 3, bgcolor: "rgba(255, 255, 255, 0.05)", height: "100%" }}
          >
            <Typography variant="h5" sx={{ mb: 3 }}>
              Update Password
            </Typography>

            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <LockIcon sx={{ color: "text.secondary" }} />
              <Controller
                name="passwordCurrent"
                control={control}
                rules={{ required: "Current Password is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Password"
                    variant="standard"
                    type="password"
                    InputLabelProps={{ shrink: true }}
                    error={!!errors.passwordCurrent}
                    helperText={errors.passwordCurrent?.message}
                  />
                )}
              />
            </Box>

            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <VpnKeyIcon sx={{ color: "text.secondary" }} />
              <Controller
                name="password"
                control={control}
                rules={{
                  required: "New Password is required",
                  validate: (value) =>
                    value !== getValues("passwordCurrent") ||
                    "New password cannot be the same as current password",
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="New Password"
                    variant="standard"
                    type="password"
                    InputLabelProps={{ shrink: true }}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                  />
                )}
              />
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              <CheckCircleIcon sx={{ color: "text.secondary" }} />
              <Controller
                name="passwordConfirm"
                control={control}
                rules={{
                  required: "Please confirm your new password",
                  validate: (value) =>
                    value === getValues("password") || "Passwords do not match",
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Confirm New Password"
                    variant="standard"
                    type="password"
                    InputLabelProps={{ shrink: true }}
                    error={!!errors.passwordConfirm}
                    helperText={errors.passwordConfirm?.message}
                  />
                )}
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "left", mt: 3 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit(onSubmitHandler)}
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
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

PasswordUpdatePage.propTypes = {
  onSubmitHandler: PropTypes.func.isRequired,
};

export default PasswordUpdatePage;

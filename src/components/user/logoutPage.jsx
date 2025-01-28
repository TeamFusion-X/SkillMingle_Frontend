import { Box, Grid, Typography, Paper, Button } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";

const LogoutCard = () => {
	const dispatch = useDispatch();

	const handleLogout = async (e) => {
		e.preventDefault();
		dispatch(logoutUser());
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Grid container spacing={4}>
				{/* Update Password Section */}
				<Grid item xs={12} md={6}>
					<Paper
						sx={{
							p: 3,
							bgcolor: "rgba(255, 255, 255, 0.05)",
							height: "100%",
						}}
					>
						<Typography variant="h5" sx={{ mb: 3 }}>
							Logout
						</Typography>

						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: 2,
								mb: 2,
							}}
						>
							<InfoIcon sx={{ color: "text.secondary" }} />

							{/* Message Content */}
							<Box>
								<Typography
									variant="body1"
									color="text.primary"
								>
									Are you sure you want to log out?
								</Typography>
								<Typography
									variant="body1"
									color="text.primary"
								>
									Any unsaved changes will be lost.
								</Typography>
							</Box>
						</Box>

						<Box
							sx={{
								display: "flex",
								justifyContent: "left",
								mt: 3,
							}}
						>
							<Button
								variant="contained"
								color="error"
								onClick={handleLogout}
								sx={{
									textTransform: "none",
									"&:hover": {
										backgroundColor: "#145ca4",
									},
									padding: "8px 16px",
									borderRadius: "4px",
								}}
							>
								Logout
							</Button>
						</Box>
					</Paper>
				</Grid>
			</Grid>
		</Box>
	);
};

export default LogoutCard;

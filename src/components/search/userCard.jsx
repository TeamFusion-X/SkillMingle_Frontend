import PropTypes from "prop-types";
import { Box, Typography, Button, Avatar } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const UserCard = ({ user }) => {
	const onSendRequest = (username) => {};

	return (
		<Box
			style={{
				display: "flex",
				flexDirection: "column",
				padding: "20px",
				backgroundColor: "rgba(255, 255, 255, 0.2)",
				backdropFilter: "blur(10px)",
				marginBottom: "15px",
				borderRadius: "12px",
				boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
				color: "#ffffff",
			}}
		>
			{/* Left Section - Avatar and User Info */}
			<Box display="flex" alignItems="center" gap="15px">
				<Avatar
					alt={user.name}
					src={user.dp}
					style={{
						width: "60px",
						height: "60px",
						border: "2px solid #ffffff",
					}}
				/>
				<Box>
					<Typography
						variant="h6"
						style={{ fontWeight: "bold", color: "#ffffff" }}
					>
						{user.name}
					</Typography>
					<Typography
						variant="body2"
						style={{
							color: "#dddddd",
							fontStyle: "italic",
						}}
					>
						@{user.username}
					</Typography>
					<Typography
						variant="body2"
						style={{
							color: "rgba(144, 238, 144, 0.9)",
						}}
					>
						Match: {user.match}
					</Typography>
				</Box>
			</Box>

			{/* Right Section - Rating and Send Request */}
			<Box
				display="flex"
				flexDirection="column"
				alignItems="center"
				gap="10px"
			>
				<Typography
					variant="body2"
					style={{
						backgroundColor: "rgba(173, 216, 230, 0.2)",
						padding: "5px 10px",
						borderRadius: "8px",
						color: "#ffffff",
					}}
				>
					Rating: {user.rating.toFixed(1)} ⭐
				</Typography>
				<Button
					variant="outlined"
					startIcon={<SendIcon />}
					style={{
						borderColor: "rgba(255, 223, 186, 0.6)",
						color: "rgba(255, 223, 186, 0.9)",
					}}
					onClick={() => onSendRequest(user.username)}
				>
					Send Request
				</Button>
			</Box>
		</Box>
	);
};

// Prop Validations
UserCard.propTypes = {
	user: PropTypes.shape({
		username: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		dp: PropTypes.string,
		rating: PropTypes.number.isRequired,
		match: PropTypes.string.isRequired,
	}).isRequired,
	onSendRequest: PropTypes.func.isRequired,
};

export default UserCard;

import PropTypes from "prop-types";
import { Box, Typography, Avatar, Button } from "@mui/material";
import { sendRequestAPI } from "../../services/requestAPI";

const ProfileCard = ({ username, name, dp, rating, match, skill }) => {
	const handleUsernameClick = async(username) => {
		const url = `/about/${encodeURIComponent(username)}`;
		window.open(url, "_blank");
	}

	const onSendRequest = async () => {
		try {
			const response = await sendRequestAPI(skill, username);
			if (response.status === "success") {
				console.log("Request Sent");
			}
		} catch (error) {
			console.error("Error sending request:", error);
		}
	};

	return (
		<Box
			style={{
				display: "flex",
				flexDirection: "row",
				width: "100%",
				maxWidth: "600px",
				padding: "15px 20px",
				backgroundColor: "rgba(255, 255, 255, 0.2)",
				backdropFilter: "blur(10px)",
				marginBottom: "15px",
				borderRadius: "12px",
				boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
				color: "#ffffff",
				cursor: "pointer",
				transition: "transform 0.2s, background-color 0.2s",
			}}
			onMouseEnter={(e) =>
				(e.currentTarget.style.backgroundColor =
					"rgba(255, 255, 255, 0.3)")
			}
			onMouseLeave={(e) =>
				(e.currentTarget.style.backgroundColor =
					"rgba(255, 255, 255, 0.2)")
			}
			onMouseDown={(e) =>
				(e.currentTarget.style.transform = "scale(0.97)")
			}
			onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
		>
			{/* Profile Avatar */}
			<Avatar
				src={dp}
				alt={name}
				style={{
					width: "80px",
					height: "80px",
					marginRight: "20px",
					border: "2px solid rgba(255, 255, 255, 0.6)",
				}}
			/>

			{/* Profile Details */}
			<Box
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					width: "100%",
				}}
			>
				{/* Name and Username */}
				<Box
					style={{
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<Typography
						variant="h6"
						style={{
							fontWeight: "bold",
							color: "#ffffff",
						}}
					>
						{name}
					</Typography>
					<Typography
					variant="body2"
					onClick={() => handleUsernameClick(username)} 
					style={{
						textAlign: "right",
						flex: 1,
						color: "rgb(114, 236, 226)", 
						fontStyle: "italic",
						cursor: "pointer", 
					}}
				>
					<strong>{username}</strong>
				</Typography>
				</Box>

				{/* Rating, Match, and Button */}
				<Box
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						marginTop: "10px",
					}}
				>
					<Typography
						variant="body2"
						style={{
							color: "#dddddd",
						}}
					>
						Rating: <strong>{rating}⭐</strong>
					</Typography>
					<Typography
						variant="body2"
						style={{
							color: "#dddddd",
						}}
					>
						Match:<strong>{match}%</strong>
					</Typography>

					<Button
						variant="contained"
						style={{
							backgroundColor: "rgba(144, 238, 144, 0.8)",
							color: "#000000",
							fontWeight: "bold",
							textTransform: "none",
							boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
							padding: "5px 15px",
						}}
						onClick={(e) => {
							e.stopPropagation(); // Prevent card click event
							onSendRequest();
						}}
					>
						Send Request
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

// Prop Validations
ProfileCard.propTypes = {
	username: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	dp: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
	match: PropTypes.string.isRequired,
	skill: PropTypes.string.isRequired,
};

export default ProfileCard;

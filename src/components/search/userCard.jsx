import PropTypes from "prop-types";
import { Box, Typography, Avatar, Button } from "@mui/material";
import { sendRequestAPI } from "../../services/requestAPI";

const ProfileCard = ({ username, name, dp, rating, match, skill }) => {
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
				flexDirection: "column",
				width: "100%",
				maxWidth: "600px",
				padding: "15px 20px",
				backgroundColor: "rgba(255, 255, 255, 0.2)",
				backdropFilter: "blur(10px)",
				marginBottom: "15px",
				borderRadius: "12px",
				boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
				color: "#ffffff",
				cursor: "pointer", // Makes the card appear clickable
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
			{/* Profile Header */}
			<Box display="flex" alignItems="center" marginBottom="15px">
				{/* Profile Avatar */}
				<Avatar
					src={dp}
					alt={name}
					style={{
						width: "60px",
						height: "60px",
						marginRight: "20px",
						border: "2px solid rgba(255, 255, 255, 0.6)",
					}}
				/>
				{/* Profile Information */}
				<Box display="flex" flexDirection="column">
					<Typography
						variant="h6"
						style={{
							fontWeight: "bold",
							color: "#ffffff",
						}}
					>
						{name} (@{username})
					</Typography>
					<Typography
						variant="body2"
						style={{
							color: "#dddddd",
						}}
					>
						Rating: <strong>{rating}</strong> | Match:{" "}
						<strong>{match}%</strong>
					</Typography>
				</Box>
			</Box>

			{/* Send Request Button */}
			<Button
				variant="contained"
				style={{
					marginTop: "10px",
					backgroundColor: "rgba(144, 238, 144, 0.8)",
					color: "#000000",
					fontWeight: "bold",
					textTransform: "none",
					boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
					width: "fit-content",
					alignSelf: "flex-end", // Align button to the right
				}}
				onClick={(e) => {
					e.stopPropagation(); // Prevent card click event
					onSendRequest();
				}}
			>
				Send Request
			</Button>
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

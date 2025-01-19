import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

const ConversationCard = ({ skill, chatWith, onSelect }) => {
	return (
		<Box
			onClick={onSelect}
			style={{
				display: "flex",
				flexDirection: "column",
				width: "100%",
				maxWidth: "600px",
				padding: "20px",
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
			onMouseUp={(e) =>
				(e.currentTarget.style.transform = "scale(1.0)")
			}
		>
			{/* Top Section */}
			<Box
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				marginBottom="15px"
			>
				<Typography
					variant="h6"
					style={{ fontWeight: "bold", color: "#ffffff" }}
				>
					{skill}
				</Typography>
				<Typography
					variant="body2"
					style={{
						textAlign: "right",
						color: "#dddddd",
						fontStyle: "italic",
					}}
				>
					Chat with: <strong>{chatWith}</strong>
				</Typography>
			</Box>
		</Box>
	);
};

// Prop Validations
ConversationCard.propTypes = {
	skill: PropTypes.string.isRequired,
	chatWith: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired,
};

export default ConversationCard;

import PropTypes from "prop-types";
import AddIcon from "@mui/icons-material/Add";
import { Box, Typography, Chip } from "@mui/material";
import { useParams } from "react-router-dom";
import { sendRequestAPI } from "../../services/requestAPI";

const SkillRequest = (props) => {
	const { skills } = props;
	const { username } = useParams();

	const handleSendRequest = async (skill) => {
		try {
			const response = await sendRequestAPI(skill, username);
			if (response.status === "success") {
				console.log("Request sent successfully!");
			}
		} catch (error) {
			console.error("Error sending request:", error);
		}
	};

	return (
		<Box sx={{ mb: 4 }}>
			<Typography variant="h6" sx={{ mb: 2 }}>
				Skills to Teach
			</Typography>

			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					gap: 1,
				}}
			>
				{skills.map((skill, index) => (
					<Chip
						key={`${skill}-${index}`}
						label={skill}
						deleteIcon={<AddIcon sx={{ color: "white" }} />}
						onDelete={() => handleSendRequest(skill)}
						sx={{
							bgcolor: "rgba(255, 255, 255, 0.1)",
							color: "white",
							"& .MuiChip-deleteIcon": {
								color: "white !important",
								"&:hover": {
									color: "green !important",
								},
							},
							"&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)" },
						}}
					/>
				))}
			</Box>
		</Box>
	);
};

SkillRequest.propTypes = {
	skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SkillRequest;

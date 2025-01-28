import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import {
	Box,
	Typography,
	Button,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CancelIcon from "@mui/icons-material/Cancel";
import {
	teachFreeAPI,
	teachPaidAPI,
	skillShareAPI,
	skillShareGetSkillsAPI,
	rejectRequestAPI,
} from "../../services/requestAPI";

const RequestCard = ({ requestID, skill, sender, onActionSuccess }) => {
	const navigate = useNavigate();

	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [chooseSkills, setChooseSkills] = useState([]);

	const toggleDrawer = (open) => () => {
		setIsDrawerOpen(open);
	};

	const handleSkillSelect = async (selectedSkill) => {
		setIsDrawerOpen(false);
		onAction("Skill Share", selectedSkill);
	};

	const handleUsernameClick = async (username) => {
		const url = `/about/${encodeURIComponent(username)}`;
		navigate(url);
	};

	const onAction = async (type, selectedSkill = null) => {
		try {
			if (type === "Teach Free") {
				const response = await teachFreeAPI(requestID);
				console.log("Teach Free Response:", response);
				onActionSuccess();
			} else if (type === "Teach Paid") {
				const response = await teachPaidAPI(requestID);
				console.log("Teach Paid Response:", response);
				onActionSuccess();
			} else if (type === "Skill Share" && !selectedSkill) {
				// Fetch available skills for skill sharing
				const response = await skillShareGetSkillsAPI(requestID);
				if (response && response.skillsToChooseFrom) {
					setChooseSkills(response.skillsToChooseFrom);
					setIsDrawerOpen(true);
				} else {
					console.error("No skills found for skill sharing.");
				}
			} else if (type === "Skill Share" && selectedSkill) {
				// Handle skill share with the selected skill
				const response = await skillShareAPI(requestID, selectedSkill);
				console.log("Skill Share Response:", response);
				onActionSuccess();
			} else if (type === "Reject") {
				const response = await rejectRequestAPI(requestID);
				console.log("Reject Response:", response);
				onActionSuccess();
			}
		} catch (error) {
			console.error("Error performing action:", error);
		}
	};

	return (
		<Box
			sx={{
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
				transition: "all 0.3s ease", // Add smooth transition
				"&:hover": {
					transform: "scale(1.02)",
					backgroundColor: "rgba(255, 255, 255, 0.25)",
					boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
				},
			}}
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
					style={{ fontWeight: "bold", flex: 1, color: "#ffffff" }}
				>
					{skill}
				</Typography>
				<Typography
					variant="body2"
					onClick={() => handleUsernameClick(sender)}
					style={{
						textAlign: "right",
						flex: 1,
						color: "rgb(114, 236, 226)",
						fontStyle: "italic",
						cursor: "pointer",
					}}
				>
					<strong>{sender}</strong>
				</Typography>
			</Box>

			{/* Action Buttons */}
			<Box
				display="flex"
				justifyContent="space-around"
				alignItems="center"
			>
				<Button
					variant="outlined"
					startIcon={<SchoolIcon />}
					style={{
						borderColor: "rgba(144, 238, 144, 0.6)",
						color: "rgba(144, 238, 144, 0.9)",
					}}
					onClick={() => {
						onAction("Teach Free");
						onActionSuccess();
					}}
				>
					Teach Free
				</Button>
				<Button
					variant="outlined"
					startIcon={<SwapHorizIcon />}
					style={{
						borderColor: "rgba(173, 216, 230, 0.6)",
						color: "rgba(173, 216, 230, 0.9)",
					}}
					onClick={() => {
						onAction("Skill Share");
						toggleDrawer(true);
					}}
				>
					Skill Share
				</Button>
				<Button
					variant="outlined"
					startIcon={<MonetizationOnIcon />}
					style={{
						borderColor: "rgba(255, 223, 186, 0.6)",
						color: "rgba(255, 223, 186, 0.9)",
					}}
					onClick={() => onAction("Teach Paid")}
				>
					Teach Paid
				</Button>
				<Button
					variant="outlined"
					startIcon={<CancelIcon />}
					style={{
						borderColor: "rgba(255, 182, 193, 0.6)",
						color: "rgba(255, 182, 193, 0.9)",
					}}
					onClick={() => onAction("Reject")}
				>
					Reject
				</Button>
			</Box>

			{/* Drawer for Skill Selection */}
			<Drawer
				anchor="right"
				open={isDrawerOpen}
				onClose={toggleDrawer(false)}
				PaperProps={{
					style: {
						width: "300px",
						backgroundColor: "rgba(50, 50, 50, 0.9)",
						color: "#ffffff",
						padding: "15px",
					},
				}}
			>
				<Typography
					variant="h6"
					style={{ marginBottom: "10px", color: "#ffffff" }}
				>
					Select a Skill
				</Typography>
				<List>
					{chooseSkills.map((skillItem, index) => (
						<ListItem key={index} disablePadding>
							<ListItemButton
								onClick={() => handleSkillSelect(skillItem)}
								style={{
									borderBottom:
										"1px solid rgba(255, 255, 255, 0.2)",
								}}
							>
								<ListItemText
									primary={skillItem}
									primaryTypographyProps={{
										style: { color: "#ffffff" },
									}}
								/>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
		</Box>
	);
};

// Prop Validations
RequestCard.propTypes = {
	requestID: PropTypes.string.isRequired,
	skill: PropTypes.string.isRequired,
	sender: PropTypes.string.isRequired,
	onActionSuccess: PropTypes.func.isRequired,
};

export default RequestCard;

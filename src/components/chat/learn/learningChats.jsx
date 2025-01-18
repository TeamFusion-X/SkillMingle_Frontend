import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import ChatCard from "./../chatCard";
import { getLearningChatsAPI } from "../../../services/chatAPI";

const LearningChats = () => {
	const [conversations, setConversations] = useState([]);

	const fetchConversations = async () => {
		try {
			const response = await getLearningChatsAPI();
			if (response.status === "success") {
        console.log(response)
				setConversations(response.learningChats);
			}
		} catch (error) {
			console.error("Error fetching conversations:", error);
		}
	};

	useEffect(() => {
		fetchConversations();
	}, []);

	return (
		<Box
			sx={{
				padding: "20px",
				paddingTop: "80px",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: "10px",
				minHeight: "100vh",
				minWidth: "70vw",
				backgroundColor: "transparent",
			}}
		>
			{conversations.length > 0 ? (
				conversations.map((conversation) => (
					<ChatCard
						key={conversation.id}
						chatID={conversation.id}
						skill={conversation.chatTitle}
						chatWith={conversation.chatWith}
						onSelect={() => {}}
					/>
				))
			) : (
				<Typography
					variant="h6"
					sx={{
						color: "#ffffff",
						textAlign: "center",
						marginTop: "20px",
					}}
				>
					No learning conversations found!
				</Typography>
			)}
		</Box>
	);
};

export default LearningChats;

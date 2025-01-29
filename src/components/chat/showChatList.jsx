import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import ChatListCard from "./chatListCard";
import Chat from "./chat";
import {
	getTeachingChatsAPI,
	getLearningChatsAPI,
} from "../../services/chatAPI";

const ShowChatList = ({ type }) => {
	const [conversations, setConversations] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [selectedChat, setSelectedChat] = useState(null);

	useEffect(() => {
		const fetchConversations = async () => {
			try {
				setIsLoading(true);
				setError(null);

				const response =
					type === "learn"
						? await getLearningChatsAPI()
						: await getTeachingChatsAPI();

				if (response.status === "success") {
					setConversations(
						type === "learn"
							? response.learningChats
							: response.teachingChats
					);
				} else {
					setError("Failed to fetch conversations");
				}
			} catch (error) {
				console.error("Error fetching conversations:", error);
				setError("An error occurred while fetching conversations");
			} finally {
				setIsLoading(false);
			}
		};

		fetchConversations();
	}, [type]);

	if (isLoading) {
		return <div className="p-4 text-center">Loading conversations...</div>;
	}

	if (error) {
		return <div className="p-4 text-red-500 text-center">{error}</div>;
	}

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
			{selectedChat ? (
				<Chat 
					chatID={selectedChat} 
					onBack={() => setSelectedChat(null)} 
				/>
			):(
				conversations.length > 0 ? (
					conversations.map((conversation) => (
						<ChatListCard
							key={conversation.id}
							chatID={conversation.id}
							skill={conversation.chatTitle}
							chatWith={conversation.chatWith}
							onSelect={() => setSelectedChat(conversation.id)}
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
						No {type === "learn" ? "learning" : "teaching"}{" "}
						conversations found!
					</Typography>
				)
			)}
		</Box>
	);
};

ShowChatList.propTypes = {
	type: PropTypes.oneOf(["learn", "teach"]).isRequired,
};

export default ShowChatList;
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import {
	Box,
	TextField,
	IconButton,
	Typography,
	Paper,
	CircularProgress,
	LinearProgress,
	Avatar,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";
import { getChatAPI } from "../../services/chatAPI";

const Chat = ({ chatID, onBack }) => {
	const currentUserId = useSelector((state) => state.user._id);

	const [messages, setMessages] = useState([]);
	const [newMessage, setNewMessage] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [chatData, setChatData] = useState(null);
	const [otherParticipant, setOtherParticipant] = useState(null);

	const socketRef = useRef();
	const messagesEndRef = useRef(null);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		socketRef.current = io(
			import.meta.env.VITE_API_URL.slice(0, -4) || "http://localhost:3000"
		);

		socketRef.current.emit("join-room", chatID);

		socketRef.current.on("receive-message", (newMessage) => {
			setMessages((prev) => [...prev, newMessage]);
			scrollToBottom();
		});

		return () => {
			socketRef.current.disconnect();
		};
	}, [chatID]);

	useEffect(() => {
		const fetchChat = async () => {
			try {
				setIsLoading(true);
				console.log(chatID);
				const response = await getChatAPI(chatID);

				if (response.status === "success") {
					const chat = response.chat;
					setChatData(chat);

					const otherParticipant = chat.participants.find(
						(participant) => participant._id !== currentUserId
					);
					setOtherParticipant(otherParticipant);

					if (chat.messages && chat.messages.length > 0) {
						setMessages(chat.messages);
					}
				}
			} catch (error) {
				console.error("Error fetching chat:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchChat();
	}, [chatID, currentUserId]);

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	const handleSendMessage = async (e) => {
		e.preventDefault();
		if (!newMessage.trim()) return;

		try {
			socketRef.current.emit("send-message", {
				message: newMessage,
				room: chatID,
				sender: currentUserId,
			});

			setNewMessage("");
		} catch (error) {
			console.error("Error sending message:", error);
		}
	};

	if (isLoading) {
		return (
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "100vh",
				}}
			>
				<CircularProgress />
			</Box>
		);
	}

	return (
		<Box
			sx={{
				height: "100vh",
				width: "100%",
				display: "flex",
				flexDirection: "column",
				bgcolor: "background.default",
			}}
		>
			{/* Header */}
			<Box
				sx={{
					p: 2,
					bgcolor: "rgba(255, 255, 255, 0.2)",
					backdropFilter: "blur(10px)",
					borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
				}}
			>
				<Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
					<IconButton onClick={onBack} sx={{ color: "white", mr: 2 }}>
						<ArrowBackIcon />
					</IconButton>
					<Typography variant="h6" sx={{ color: "white", mr: 2 }}>
						{chatData?.chatTitle}
					</Typography>
					{otherParticipant && (
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								ml: "auto",
							}}
						>
							<Avatar
								src={otherParticipant.avatar}
								sx={{ mr: 1 }}
							>
								{otherParticipant.name?.charAt(0)}
							</Avatar>
							<Typography sx={{ color: "white" }}>
								{otherParticipant.name}
							</Typography>
						</Box>
					)}
				</Box>

				{/* Skill Progress Bar */}
				<Box sx={{ px: 2 }}>
					<Typography variant="body2" sx={{ color: "white", mb: 1 }}>
						Skill Progress: {chatData?.skillProgress}%
					</Typography>
					<LinearProgress
						variant="determinate"
						value={chatData?.skillProgress || 0}
						sx={{
							height: 8,
							borderRadius: 4,
							backgroundColor: "rgba(255, 255, 255, 0.1)",
							"& .MuiLinearProgress-bar": {
								backgroundColor: "primary.main",
							},
						}}
					/>
				</Box>
			</Box>

			{/* Messages Area */}
			<Box
				sx={{
					flex: 1,
					overflowY: "auto",
					p: 2,
					display: "flex",
					flexDirection: "column",
					gap: 2,
				}}
			>
				{messages.map((message) => (
					<Paper
						key={message._id}
						sx={{
							p: 2,
							maxWidth: "70%",
							alignSelf:
								message.sender === currentUserId
									? "flex-end"
									: "flex-start",
							bgcolor:
								message.sender === currentUserId
									? "primary.main"
									: "grey.800",
							color: "white",
							borderRadius: 2,
						}}
					>
						<Typography>{message.content}</Typography>
						<Typography
							variant="caption"
							sx={{
								display: "block",
								mt: 1,
								opacity: 0.7,
								textAlign:
									message.sender === currentUserId
										? "right"
										: "left",
							}}
						>
							{new Date(message.createdAt).toLocaleTimeString(
								[],
								{
									hour: "2-digit",
									minute: "2-digit",
								}
							)}
						</Typography>
					</Paper>
				))}
				<div ref={messagesEndRef} />
			</Box>

			{/* Message Input */}
			<Box
				component="form"
				onSubmit={handleSendMessage}
				sx={{
					p: 2,
					bgcolor: "rgba(255, 255, 255, 0.2)",
					backdropFilter: "blur(10px)",
					display: "flex",
					gap: 1,
				}}
			>
				<TextField
					fullWidth
					variant="outlined"
					placeholder="Type a message..."
					value={newMessage}
					onChange={(e) => setNewMessage(e.target.value)}
					sx={{
						"& .MuiOutlinedInput-root": {
							color: "white",
							"& fieldset": {
								borderColor: "rgba(255, 255, 255, 0.3)",
							},
							"&:hover fieldset": {
								borderColor: "rgba(255, 255, 255, 0.5)",
							},
							"&.Mui-focused fieldset": {
								borderColor: "primary.main",
							},
						},
					}}
				/>
				<IconButton
					type="submit"
					color="primary"
					sx={{
						bgcolor: "primary.main",
						"&:hover": {
							bgcolor: "primary.dark",
						},
					}}
				>
					<SendIcon />
				</IconButton>
			</Box>
		</Box>
	);
};

Chat.propTypes = {
	chatID: PropTypes.string.isRequired,
	onBack: PropTypes.func.isRequired,
};

export default Chat;

import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import {
	Box,
	Button,
	TextField,
	IconButton,
	Typography,
	Paper,
	CircularProgress,
	LinearProgress,
	Avatar,
} from "@mui/material";
import { CircleArrowLeft, ArrowUpWideNarrow, Send } from "lucide-react";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";
import { getChatAPI, increaseSkillProgressAPI } from "../../services/chatAPI";
import { useNavigate, useLocation } from "react-router-dom";

const Chat = ({ chatID, onBack }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const isTeacher = location.pathname.includes("/teach");

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
		socketRef.current = io(import.meta.env.VITE_API_URL.slice(0, -4));

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

	const handleUsernameClick = () => {
		if (otherParticipant?.name) {
			const url = `/about/${encodeURIComponent(
				otherParticipant.username
			)}`;
			navigate(url);
		}
	};

	const handleIncreaseSkill = async () => {
		try {
			const response = await increaseSkillProgressAPI(chatID);
			if (response.status === "success") {
				setChatData((prevData) => ({
					...prevData,
					skillProgress: Math.min(
						(prevData.skillProgress || 0) + 10,
						100
					),
				}));
			}
		} catch (error) {
			console.error("Error increasing skill progress:", error);
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
				height: "90vh",
				minWidth: "90vw",
				maxWidth: "90vw",
				display: "flex",
				flexDirection: "column",
				bgcolor: "rgba(0, 0, 0, 0.2)",
			}}
		>
			{/* Header */}
			<Box
				sx={{
					p: 2,
					bgcolor: "rgba(255, 255, 255, 0.2)",
					backdropFilter: "blur(10px)",
					borderBottom: "1px solid rgba(255, 255, 255, 0.4)",
				}}
			>
				<Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
					<IconButton
						onClick={onBack}
						size="small"
						sx={{
							color: "rgb(0, 160, 190)",
							"&:hover": {
								bgcolor: "rgb(121, 121, 121)",
							},
						}}
						title="Back"
					>
						<CircleArrowLeft/>
					</IconButton>

					<Typography variant="h6" sx={{ color: "white", mr: 2 }}>
						{isTeacher ? "Teach " : "Learn "}{chatData?.chatTitle}
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
							<Typography
								onClick={handleUsernameClick}
								sx={{
									color: "white",
									cursor: "pointer",
									"&:hover": {
										textDecoration: "underline",
									},
								}}
							>
								{otherParticipant.name}
							</Typography>
						</Box>
					)}
				</Box>

				{/* Skill Progress Bar */}
				<Box sx={{ px: 2 }}>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							mb: 1,
						}}
					>
						<Typography variant="body2" sx={{ color: "white" }}>
							Skill Progress: {chatData?.skillProgress}%
						</Typography>
						{isTeacher && (
							<IconButton
								onClick={handleIncreaseSkill}
								size="small"
								sx={{
									color: "rgb(0, 160, 190)",
									"&:hover": {
										bgcolor: "rgba(121, 121, 121)",
									},
								}}
								title="Increase progress"
							>
								<ArrowUpWideNarrow/>
							</IconButton>
						)}
					</Box>
					<LinearProgress
						variant="determinate"
						value={chatData?.skillProgress || 0}
						sx={{
							height: 8,
							borderRadius: 4,
							backgroundColor: "rgba(255, 255, 255, 0.6)",
							"& .MuiLinearProgress-bar": {
								backgroundColor: "rgb(0, 160, 190)",
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
									? "rgb(0, 160, 190)"
									: "rgb(77, 77, 77)",
							color: "white",
							borderRadius: 2,
							wordWrap: "break-word",
							overflowWrap: "break-word",
							whiteSpace: "pre-wrap",
							minWidth: 0, // This helps with flexbox content wrapping
						}}
					>
						<Typography sx={{ wordBreak: "break-word" }}>{message.content}</Typography>
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
					placeholder="Message..."
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
								borderColor: "rgb(0, 160, 190)",
							},
						},
					}}
				/>
				<Button
					type="submit"
					variant="contained"
					disabled={!newMessage.trim()}
					sx={{
						minWidth: "50px",
						height: "56px",
						borderRadius: "8px",
						backgroundColor: "rgb(0, 160, 190)"
					}}
				>
					<Send/>
				</Button>
			</Box>
		</Box>
	);
};

Chat.propTypes = {
	chatID: PropTypes.string.isRequired,
	onBack: PropTypes.func.isRequired,
};

export default Chat;
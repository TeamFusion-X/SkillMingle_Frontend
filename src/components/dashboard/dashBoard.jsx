import React from "react";
import {
	Box,
	Container,
	Typography,
	Grid,
	Card,
	CardContent,
	Fab,
	IconButton,
	Dialog,
	DialogTitle,
	DialogContent,
} from "@mui/material";
import { Bot, X as Close } from "lucide-react";
import { useSelector } from "react-redux";
import QueryBot from "../queryBot/queryBot";

const Dashboard = () => {
	const [chatOpen, setChatOpen] = React.useState(false);
	const user = useSelector((state) => state.user.name);

	const handleChatOpen = () => {
		setChatOpen(true);
	};

	const handleChatClose = () => {
		setChatOpen(false);
	};

	return (
		<Box
			sx={{
				minHeight: "100vh",
				minWidth: "80vw",
				position: "relative",
				paddingTop: "80px",
				backgroundColor: "transparent",
			}}
		>
			{/* Greeting Section */}
			<Container maxWidth="lg" sx={{ pt: 4 }}>
				<Typography
					variant="h3"
					sx={{
						fontWeight: "bold",
						fontFamily: "'Poppins', sans-serif",
						mb: 4,
						color: "#fff",
						textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
					}}
				>
					Hello 👋, {user || "User"}!
				</Typography>
			</Container>

			{/* Main Content Sections */}
			<Container maxWidth="lg" sx={{ mt: 4 }}>
				<Grid container direction="column" spacing={4}>
					{/* Section 1 */}
					<Grid item xs={12}>
						<Card
							sx={{
								background: "rgba(255, 255, 255, 0.1)", // Transparent background
								backdropFilter: "blur(10px)",
								transition: "transform 0.3s, box-shadow 0.3s",
								"&:hover": {
									transform: "scale(1.05)",
									boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
								},
							}}
						>
							<CardContent>
								<Typography
									variant="h5"
									sx={{
										fontWeight: "bold",
										mb: 2,
										color: "#fff",
									}}
								>
									First Section
								</Typography>
							</CardContent>
						</Card>
					</Grid>

					{/* Section 2 */}
					<Grid item xs={12}>
						<Card
							sx={{
								background: "rgba(255, 255, 255, 0.1)",
								backdropFilter: "blur(10px)",
								transition: "transform 0.3s, box-shadow 0.3s",
								"&:hover": {
									transform: "scale(1.05)",
									boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
								},
							}}
						>
							<CardContent>
								<Typography
									variant="h5"
									sx={{
										fontWeight: "bold",
										mb: 2,
										color: "#fff",
									}}
								>
									Second Section
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>

			{/* Chat Button */}
			<Fab
				variant="extended"
				color="secondary"
				aria-label="chat"
				sx={{
					position: "fixed",
					bottom: 24,
					right: 24,
					transition: "transform 0.3s",
					"&:hover": {
						transform: "scale(1.1)",
					},
					backgroundColor: "rgba(255, 255, 255, 0.1)", 
					backdropFilter: "blur(10px)", 
					px: 3,
					textTransform: "none", 
					color: "#fff", 
					boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)", 
				}}
				onClick={handleChatOpen}
			>
				<Bot className="mr-2"/>
				Ask query..
			</Fab>

			{/* Chat Dialog */}
			<Dialog
				open={chatOpen}
				onClose={handleChatClose}
				maxWidth="sm"
				fullWidth
				PaperProps={{
					sx: {
						borderRadius: 2,
						position: "fixed",
						bottom: 24,
						right: 24,
						m: 0,
						width: "400px",
						height: "600px",
						background: "rgba(60, 60, 60, 0.8)",
						backdropFilter: "blur(10px)",
					},
				}}
			>
				<DialogTitle
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Typography variant="h6" sx={{ fontWeight: "bold" }}>
						Query Bot
					</Typography>
					<IconButton onClick={handleChatClose} size="small">
						<Close color="rgb(255, 255, 255)"/>
					</IconButton>
				</DialogTitle>
				<DialogContent>
					<QueryBot />
				</DialogContent>
			</Dialog>
		</Box>
	);
};

export default Dashboard;

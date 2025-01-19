import { Link } from "react-router-dom";
import {
	Box,
	Container,
	Typography,
	Button,
	Grid,
	Card,
	CardContent,
} from "@mui/material";

const LandingPage = () => {
	return (
		<Box>
			<Container
				maxWidth="lg"
				style={{ textAlign: "center", marginTop: "120px" }}
			>
				<Typography
					variant="h2"
					style={{
						fontWeight: "bold",
						marginBottom: "20px",
						fontFamily: "'Poppins', sans-serif",
					}}
				>
					Welcome to SkillMingle
				</Typography>
				<Typography
					variant="h6"
					style={{ color: "#e0ffff", marginBottom: "40px" }}
				>
					Connect, learn, and share your skills with a vibrant
					community of learners.
				</Typography>
				<Button
					component={Link}
					to="/signup"
					variant="contained"
					color="primary"
					size="large"
					style={{ marginRight: "10px" }}
				>
					Get Started
				</Button>
				<Button
					component={Link}
					to="https://github.com/TeamFusion-X/SkillMingle_Backend/blob/main/README.md"
					variant="outlined"
					color="primary"
					size="large"
				>
					Learn More
				</Button>
			</Container>

			<Container maxWidth="lg" style={{ marginTop: "40px" }}>
				<Typography
					variant="h4"
					style={{
						fontWeight: "bold",
						marginBottom: "30px",
						textAlign: "center",
					}}
				>
					Key Features
				</Typography>
				<Grid container spacing={4}>
					{[
						{
							title: "Shared Growth",
							description:
								"Create profiles, highlight skills, and start connecting.",
						},
						{
							title: "Learn new Skills",
							description:
								"Discover skills you want to learn or teach with powerful search tools.",
						},
						{
							title: "Real-time Messaging",
							description:
								"Communicate instantly with other users to plan your skill exchange.",
						},
						{
							title: "Progress Tracking",
							description:
								"Monitor your learning journey and track achievements.",
						},
						{
							title: "Community Engagement",
							description:
								"Join discussions, participate in groups, and build connections.",
						},
						{
							title: "Rating System",
							description:
								"Provide feedback and help others choose the best collaborators.",
						},
					].map((feature, index) => (
						<Grid item xs={12} sm={6} md={4} key={index}>
							<Card
								sx={{
									transition:
										"transform 0.3s, box-shadow 0.3s",
									"&:hover": {
										transform: "scale(1.05)",
										boxShadow:
											"0 6px 20px rgba(0, 0, 0, 0.3)",
									},
								}}
							>
								<CardContent>
									<Typography
										variant="h6"
										style={{
											fontWeight: "bold",
											marginBottom: "10px",
										}}
									>
										{feature.title}
									</Typography>
									<Typography
										variant="body1"
										style={{ color: "#e0ffff" }}
									>
										{feature.description}
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>

			<Box
				style={{
					padding: "20px",
					marginTop: "60px",
					textAlign: "center",
				}}
			>
				<Typography variant="body1" style={{ color: "#e0ffff" }}>
					&copy; {new Date().getFullYear()} SkillMingle. All rights
					reserved.
				</Typography>
			</Box>
		</Box>
	);
};

export default LandingPage;

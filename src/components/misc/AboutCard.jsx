import { Card, Typography, Button, Grid, Box } from "@mui/material";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

const AboutCard = () => {
	return (
		<Grid item xs={12} sm={6} md={4}>
			<Card
				sx={{
					textAlign: "center",
					borderRadius: "16px",
					padding: "16px",
					boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
					background: "rgba(173, 216, 230, 0.3)",
					color: "#fff",
					position: "relative",
					overflow: "visible",
					maxWidth: "320px",
				}}
			>
				{/* Profile Image (Square, Half Inside/Outside Card) */}
				<Box
					component="img"
					src="https://picsum.photos/200"
					alt="Profile"
					sx={{
						width: "140px",
						height: "140px",
						position: "absolute",
						top: "-60px", // Half the height
						left: "50%",
						transform: "translateX(-50%)",
						borderRadius: "20%", // Optional: for circular image
						border: "3px solid white",
						zIndex: 1,
					}}
				/>

				{/* Name and Title */}
				<Typography variant="h6" sx={{ fontWeight: "bold", pt: 9 }}>
					Jacklin Rose
				</Typography>
				<Typography
					variant="body2"
					sx={{ color: "#fff", marginBottom: "16px" }}
				>
					Web Developer
				</Typography>

				<Box sx={{ textAlign: "left" }}>
					{/* About Section */}

					<Typography
						variant="body1"
						fontSize={"30px"}
						sx={{ paddingY: "11px" }}
					>
						About Me
					</Typography>

					<Typography variant="body1" sx={{ marginBottom: "16px" }}>
						Passionate about technology and innovation, I thrive on
						solving complex problems and turning ideas into reality.
					</Typography>

					{/* Social Media Icons */}

					<Typography
						variant="body1"
						fontSize={"30px"}
						sx={{
							paddingTop: "11px",
							paddingBottom: "5px",
						}}
					>
						Social Media
					</Typography>
					<Box
						sx={{
							display: "flex",
							justifyContent: "flex-start",
							gap: "16px",
							marginBottom: "16px",
						}}
					>
						<Facebook sx={{ cursor: "pointer" }} />
						<Instagram sx={{ cursor: "pointer" }} />
						<LinkedIn sx={{ cursor: "pointer" }} />
						<Twitter sx={{ cursor: "pointer" }} />
					</Box>
				</Box>

				{/* Contact Button */}
				<Button
					variant="contained"
					sx={{
						backgroundColor: "White",
						color: "Black",
						textTransform: "none",
						padding: "10px 20px",
						width: "100%",
						borderRadius: "10px",
						"&:hover": {
							backgroundColor: "#b0245f",
						},
					}}
				>
					Contact Me
				</Button>
			</Card>
		</Grid>
	);
};

export default AboutCard;

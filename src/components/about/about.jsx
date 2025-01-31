import { Box, Grid, Typography } from "@mui/material";
import AboutCard from "./aboutCard";
import RepoCard from "./repoCard";

const About = () => {
	return (
		<Box
			sx={{
				marginTop: "80px",
				paddingX: 2,
				width: "100%",
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center"  
			}}
		>
			{/* Frontend Team Section */}
			<Box sx={{ mb: 12, width: "100%" }}>
				<Typography
					variant="h3"
					sx={{
						textAlign: "center",
						mb: 12,
						color: "#fff",
						fontWeight: "bold",
					}}
				>
					Frontend Team
				</Typography>
				<Grid
					container
					spacing={5}
					sx={{
						justifyContent: "center",
						width: "100%",
						margin: 0,
						mb: 6,
						"& .MuiGrid-root": {
							padding: 0,
						},
					}}
				>
					<Grid item xs={12} container justifyContent="center" spacing={5}>
						<Grid item>
							<AboutCard
								profilePhoto="https://media.licdn.com/dms/image/v2/D5603AQErJPMfhRFatA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719778982288?e=1742428800&v=beta&t=SVTDSR3QGSLrNfomkK5662rv5qLpddbQV1qUopHG29U"
								name="Divya Prakash Jha"
								title="Software Engineer"
								bio="Passionate about technology"
								email="prakahsdivya0607@gmail.com"
								github="https://github.com/DivyaPrakashJha"
								linkedin="https://www.linkedin.com/in/prakash-divya/"
							/>
						</Grid>
						<Grid item>
							<AboutCard
								profilePhoto="https://media.licdn.com/dms/image/v2/D5603AQFvQEGrAec8-w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726460168596?e=1742428800&v=beta&t=0h3Si_DBIzba3nJQ4PiScRs-NLoa5Pmz672QSS0QzKg"
								name="Deepesh Tiwari"
								title="Software Engineer"
								bio="Passionate about technology"
								github="https://github.com/Deepesh-Tiwari"
								linkedin="https://www.linkedin.com/in/deepesh-tiwari-666752229/"
							/>
						</Grid>
					</Grid>
				</Grid>
				<RepoCard
					title="Frontend Repository"
					url={"https://github.com/TeamFusion-X/SkillMingle_Frontend"}
				/>
			</Box>

			{/* Backend Team Section */}
			<Box sx={{ width: "100%" }}>
				<Typography
					variant="h3"
					sx={{
						textAlign: "center",
						mb: 12,
						color: "#fff",
						fontWeight: "bold",
					}}
				>
					Backend Team
				</Typography>
				<Grid
					container
					spacing={5}
					sx={{
						justifyContent: "center",
						width: "100%",
						margin: 0,
						mb: 6,
						// Remove default padding from Grid container
						"& .MuiGrid-root": {
							padding: 0,
						},
					}}
				>
					<Grid item xs={12} container justifyContent="center" spacing={10}>
						<Grid item>
							<AboutCard
								profilePhoto="https://media.licdn.com/dms/image/v2/D5603AQErJPMfhRFatA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719778982288?e=1742428800&v=beta&t=SVTDSR3QGSLrNfomkK5662rv5qLpddbQV1qUopHG29U"
								name="Divya Prakash Jha"
								title="Software Engineer"
								bio="Passionate about technology"
								email="prakahsdivya0607@gmail.com"
								github="https://github.com/DivyaPrakashJha"
								linkedin="https://www.linkedin.com/in/prakash-divya/"
							/>
						</Grid>
						<Grid item>
							<AboutCard
								profilePhoto="https://avatars.githubusercontent.com/u/94732055?v=4"
								name="Arvind Singh Rathore"
								title="Software Engineer"
								bio="Passionate about technology"
								github="https://github.com/arvindsrathore"
								linkedin="https://www.linkedin.com/in/arvindsinghrathore212002/"
							/>
						</Grid>
					</Grid>
				</Grid>
				<RepoCard
					title="Backend Repository"
					url={"https://github.com/TeamFusion-X/SkillMingle_Backend"}
				/>
			</Box>
		</Box>
	);
};

export default About;
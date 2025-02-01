import { Typography, CircularProgress, Card, CardContent } from "@mui/material";

const ServerWaitCard = () => {
	return (
		<Card
			sx={{
				transition: "transform 0.3s, box-shadow 0.3s",
				"&:hover": {
					transform: "scale(1.05)",
					boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
				},
				maxWidth: "400px",
				width: "90%",
			}}
		>
			<CardContent
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					textAlign: "center",
					gap: 2,
					padding: 3,
				}}
			>
				<Typography variant="h5" gutterBottom>
					Waking up the server...
				</Typography>

				<CircularProgress />

				<Typography variant="body1" sx={{ lineHeight: 1.6 }}>
					Since the server is hosted on a free service, it
					automatically spins down if inactive.
					<br />
					<br />
					This may take up to a minute. Please wait...
				</Typography>
			</CardContent>
		</Card>
	);
};

export default ServerWaitCard;

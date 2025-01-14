import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import RequestCard from "./requestCard";
import { getRequestsAPI } from "../../services/requestAPI";

const RequestPage = () => {
	const [requests, setRequests] = useState([]);

	const fetchRequests = async () => {
		try {
			const response = await getRequestsAPI();
			if (response.status === "success") {
				setRequests(response.data.requests);
			}
		} catch (error) {
			console.error("Error fetching requests:", error);
		}
	};

	useEffect(() => {
		fetchRequests();
	}, []);

	const removeRequest = (requestId) => {
		setRequests((prevRequests) =>
			prevRequests.filter((request) => request.id !== requestId)
		);
	};

	return (
		<Box
			sx={{
				padding: "20px",
				paddingTop: "80px",
				display: "flex",
				flexDirection: "column",
				alignItems: "stretch",
				gap: "10px",
				minHeight: "100vh",
				backgroundColor: "transparent",
			}}
		>
			{requests.length > 0 ? (
				requests.map((request) => (
					<RequestCard
						key={request.id}
						requestID={request.id}
						skill={request.skill}
						sender={request.sender}
						onActionSuccess={() => removeRequest(request.id)}
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
					No requests found.
				</Typography>
			)}
		</Box>
	);
};

export default RequestPage;

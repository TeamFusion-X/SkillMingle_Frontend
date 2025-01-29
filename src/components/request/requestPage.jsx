import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import RequestCard from "./requestCard";
import { getRequestsAPI } from "../../services/requestAPI";

const RequestPage = () => {
	const [requests, setRequests] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchRequests = async () => {
			try {
				setIsLoading(true);
	
				const response = await getRequestsAPI();
				if (response.status === "success") {
					setRequests(response.data.requests);
				}
			} catch (error) {
				console.error("Error fetching requests:", error);
			} finally{
				setIsLoading(false);
			}
		};

		fetchRequests();
	}, []);

	const removeRequest = (requestId) => {
		setRequests((prevRequests) =>
			prevRequests.filter((request) => request.id !== requestId)
		);
	};

	if (isLoading) {
		return <div className="p-4 text-center">Loading requests...</div>;
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
					No requests found!
				</Typography>
			)}
		</Box>
	);
};

export default RequestPage;

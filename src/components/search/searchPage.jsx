import { useState } from "react";
import UserCard from "./userCard";
import { Box, TextField, Button, Typography } from "@mui/material";

const SearchPage = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const sampleUsers = [
		{
			username: "john_doe",
			name: "John Doe",
			dp: "https://via.placeholder.com/150",
			rating: 4.5,
			match: "87%",
		},
		{
			username: "jane_smith",
			name: "Jane Smith",
			dp: "https://via.placeholder.com/150",
			rating: 4.8,
			match: "92%",
		},
		{
			username: "mark_twain",
			name: "Mark Twain",
			dp: "https://via.placeholder.com/150",
			rating: 4.3,
			match: "80%",
		},
	];

	const filteredUsers = sampleUsers.filter((user) =>
		user.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	const handleSendRequest = (username) => {
		console.log(`Request sent to ${username}`);
		// Add API call here to send the request
	};

	const handleSearch = () => {
		console.log(`Searching for: ${searchQuery}`);
		// Add any additional search logic here
	};

	return (
		<Box
			sx={{
				padding: "20px",
				paddingTop: "80px",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: "10px",
				height: "100vh",
				minWidth: "70vw",
				backgroundColor: "transparent",
				overflow: "hidden",
			}}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					padding: "10px",
					width: "100%",
					backgroundColor: "transparent", // Make container background transparent
					borderRadius: "8px",
					boxShadow: "none", // Remove box shadow for a cleaner look
				}}
			>
				<TextField
					variant="outlined"
					placeholder="Search skills..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					sx={{
						backgroundColor: "rgba(255, 255, 255, 0.2)",
						color: "#ffffff",
						borderRadius: "8px",
						width: "60%",
						marginRight: "10px",
						"& .MuiInputBase-root": {
							color: "#ffffff",
						},
						"& .MuiOutlinedInput-notchedOutline": {
							borderColor: "#555555", // You can change the border color to a subtle shade
						},
					}}
					inputProps={{
						style: { color: "#ffffff" },
					}}
				/>
				<Button
					variant="contained"
					onClick={handleSearch}
					sx={{
						backgroundColor: "#6200ea",
						color: "#ffffff",
						"&:hover": {
							backgroundColor: "#4500a5",
						},
					}}
				>
					Search
				</Button>
			</Box>

			<Box
				sx={{
					flex: 1,
					width: "100%",
					overflowY: "auto",
					padding: "20px",
				}}
			>
				<Box
					sx={{
						position: "sticky",
						top: 0,
						backgroundColor: "rgba(255, 255, 255, 0.3)",
						zIndex: 2,
						padding: "10px 0",
					}}
				>
					<Typography
						variant="h5"
						sx={{
							fontWeight: "bold",
							borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
							paddingBottom: "5px",
						}}
					>
						Matched Users
					</Typography>
				</Box>
				<Box
					sx={{
						marginTop: "10px",
						height: "calc(100% - 50px)",
						overflowY: "scroll",
					}}
				>
					{filteredUsers.map((user) => (
						<UserCard
							key={user.username}
							user={user}
							onSendRequest={handleSendRequest}
						/>
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default SearchPage;

import { useState } from "react";
import UserCard from "./userCard";
import { Box, TextField, Button, Typography } from "@mui/material";
import { searchSkillsAPI } from "../../services/searchAPI";

const SearchPage = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [matchedUsers, setMatchedUsers] = useState([]);
	const [searchedSkill, setSearchedSkill] = useState("");

	const handleSearch = async () => {
		try {
			const response = await searchSkillsAPI(searchQuery);
			if (response.status === "success") {
				setMatchedUsers(response.rankedUsers);
				setSearchedSkill(searchQuery);
			}
		} catch (error) {
			setMatchedUsers([]);
			console.error("Error searching:", error);
		}
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
					width: "100%",
					height: "80vh",
					overflowY: "auto",
					padding: "20px",
				}}
			>
				<Box
					sx={{
						marginTop: "10px",
						height: "calc(100% - 50px)",
						overflowY: "scroll",
					}}
				>
					{matchedUsers.length > 0 ? (
						matchedUsers.map((user) => (
							<UserCard
								key={user.username}
								username={user.username}
								name={user.name}
								rating={user.rating}
								dp={user.dp}
								match={user.match}
								skill={searchedSkill}
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
							No users found!
						</Typography>
					)}
				</Box>
			</Box>
		</Box>
	);
};

export default SearchPage;

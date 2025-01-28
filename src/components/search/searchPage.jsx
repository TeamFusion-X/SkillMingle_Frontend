import { useState } from "react";
import UserCard from "./userCard";
import {
	Box,
	TextField,
	Typography,
	InputAdornment,
	IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { searchSkillsAPI } from "../../services/searchAPI";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
	const navigate = useNavigate();
	const [searchQuery, setSearchQuery] = useState("");
	const [matchedUsers, setMatchedUsers] = useState([]);
	const [searchedSkill, setSearchedSkill] = useState("");
	const [searchUserQuery, setSearchUserQuery] = useState("");

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

	const handleUserSearch = () => {
		if (searchUserQuery) {
			const url = `/about/${encodeURIComponent(searchUserQuery)}`;
			navigate(url);
		}
	};

	const handleKeyDown = (event, action) => {
		if (event.key === "Enter") {
			action();
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
					backgroundColor: "transparent",
					borderRadius: "8px",
					boxShadow: "none",
					flexDirection: "column",
					gap: "10px",
				}}
			>
				<TextField
					variant="outlined"
					placeholder="Skill..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					onKeyDown={(e) => handleKeyDown(e, handleSearch)}
					InputProps={{
						style: { color: "#ffffff" },
						endAdornment: (
							<InputAdornment position="end">
								<IconButton
									onClick={handleSearch}
									sx={{
										color: "#ffffff",
										backgroundColor:
											"rgba(33, 150, 243, 0.3)",
										"&:hover": {
											backgroundColor:
												"rgba(33, 150, 243, 0.5)",
										},
									}}
								>
									<SearchIcon />
								</IconButton>
							</InputAdornment>
						),
					}}
					sx={{
						backgroundColor: "rgba(255, 255, 255, 0.2)",
						color: "#ffffff",
						borderRadius: "8px",
						width: "60%",
						marginBottom: "10px",
						"& .MuiOutlinedInput-notchedOutline": {
							borderColor: "#555555",
						},
					}}
				/>
				<TextField
					variant="outlined"
					placeholder="Username..."
					value={searchUserQuery}
					onChange={(e) => setSearchUserQuery(e.target.value)}
					onKeyDown={(e) => handleKeyDown(e, handleUserSearch)}
					InputProps={{
						style: { color: "#ffffff" },
						endAdornment: (
							<InputAdornment position="end">
								<IconButton
									onClick={handleUserSearch}
									sx={{
										color: "#ffffff",
										backgroundColor:
											"rgba(33, 150, 243, 0.3)",
										"&:hover": {
											backgroundColor:
												"rgba(33, 150, 243, 0.5)",
										},
									}}
								>
									<SearchIcon />
								</IconButton>
							</InputAdornment>
						),
					}}
					sx={{
						backgroundColor: "rgba(255, 255, 255, 0.2)",
						color: "#ffffff",
						borderRadius: "8px",
						width: "60%",
						marginBottom: "10px",
						"& .MuiOutlinedInput-notchedOutline": {
							borderColor: "#555555",
						},
					}}
				/>
			</Box>

			<Box
				sx={{
					width: "100%",
					height: "80vh",
					overflowY: "auto",
					padding: "20px",
					display: "flex", // Add flex container
					justifyContent: "center", // Center horizontally
					alignItems: "flex-start", // Align at the top (change to "center" for vertical centering)
				}}
			>
				<Box
					sx={{
						marginTop: "10px",
						height: "calc(100% - 50px)",
						overflowY: "scroll",
						display: "flex", // Flex container for cards
						flexDirection: "column", // Ensure cards stack vertically
						alignItems: "center", // Center cards horizontally
						width: "100%", // Adjust width as needed
						maxWidth: "600px", // Optional: Set a max width for the card container
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

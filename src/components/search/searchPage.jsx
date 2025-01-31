import { useState } from "react";
import UserCard from "./userCard";
import {
	Box,
	TextField,
	Typography,
	InputAdornment,
	IconButton,
} from "@mui/material";
import { UserSearch, SearchCode } from "lucide-react";
import { searchSkillsAPI } from "../../services/searchAPI";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
	const navigate = useNavigate();
	const [searchQuery, setSearchQuery] = useState("");
	const [matchedUsers, setMatchedUsers] = useState([]);
	const [searchedSkill, setSearchedSkill] = useState("");
	const [searchUserQuery, setSearchUserQuery] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSearch = async () => {
		try {
			setIsLoading(true);
			const response = await searchSkillsAPI(searchQuery);
			if (response.status === "success") {
				setMatchedUsers(response.rankedUsers);
				setSearchedSkill(searchQuery);
			}
		} catch (error) {
			setMatchedUsers([]);
			console.error("Error searching:", error);
		} finally {
			setIsLoading(false);
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

	if (isLoading) {
		return (
			<div className="p-4 text-center">
				Searchig users who teach <strong>{searchQuery}</strong>...
			</div>
		);
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
									<SearchCode/>
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
									<UserSearch/>
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
					display: "flex",
					justifyContent: "center",
					alignItems: "flex-start",
				}}
			>
				<Box
					sx={{
						marginTop: "10px",
						height: "calc(100% - 50px)",
						overflowY: "scroll",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						width: "100%",
						maxWidth: "600px",
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

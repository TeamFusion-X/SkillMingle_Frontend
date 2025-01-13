import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import SchoolIcon from "@mui/icons-material/School";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const NavbarLP = () => {
	const location = useLocation();

	// Define buttons with their paths and icons
	const navItems = [
		{ path: "/dashboard", icon: <HomeIcon />, label: "Home" },
		{ path: "/requests", icon: <GroupAddIcon />, label: "Requests" },
		{ path: "/teach", icon: <SchoolIcon />, label: "Teach" },
		{ path: "/learn", icon: <LibraryBooksIcon />, label: "Learn" },
		{ path: "/search", icon: <SearchIcon />, label: "Search" },
		{
			path: "/notifications",
			icon: <NotificationsIcon />,
			label: "Notifications",
		},
	];

	return (
		<AppBar
			position="fixed"
			style={{
				backgroundColor: "rgba(67, 68, 68, 1.0)",
				boxShadow: "none",
			}}
		>
			<Toolbar>
				<Typography
					variant="h6"
					style={{
						fontFamily: "'Poppins', sans-serif",
						fontWeight: "bold",
					}}
				>
					SkillMingle
				</Typography>

				<Box
					sx={{
						flexGrow: 1,
						display: "flex",
						justifyContent: "center",
						padding: 2,
						gap: 1.5,
					}}
				>
					{navItems.map((item) => (
						<IconButton
							key={item.path}
							component={Link}
							to={item.path}
							color="inherit"
							style={{
								color:
									location.pathname === item.path
										? "cyan"
										: "white", // Highlight current page
							}}
							title={item.label} // Tooltip for better UX
						>
							{item.icon}
						</IconButton>
					))}
				</Box>

				{/* Right-aligned Profile Button */}
				<IconButton
					color="inherit"
					component={Link}
					to="/profile"
					style={{
						color:
							location.pathname === "/profile"
								? "yellow"
								: "white", // Highlight profile button if selected
					}}
				>
					<AccountCircleIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

export default NavbarLP;

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
	AppBar,
	Toolbar,
	Typography,
	Box,
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	useTheme,
	useMediaQuery,
	Button,
} from "@mui/material";
import {
	Menu as MenuIcon,
	Home,
	UserPlus,
	GraduationCap,
	BookOpen,
	Search,
	Bell,
	User,
} from "lucide-react";

const NavbarDB = () => {
	const [mobileOpen, setMobileOpen] = useState(false);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	const location = useLocation();

	const navItems = [
		{ path: "/dashboard", icon: <Home size={20} />, label: "Home" },
		{ path: "/requests", icon: <UserPlus size={20} />, label: "Requests" },
		{ path: "/teach", icon: <GraduationCap size={20} />, label: "Teach" },
		{ path: "/learn", icon: <BookOpen size={20} />, label: "Learn" },
		{ path: "/search", icon: <Search size={20} />, label: "Search" },
		{
			path: "/notifications",
			icon: <Bell size={20} />,
			label: "Notifications",
		},
	];

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const isActive = (path) => location.pathname === path;

	const commonButtonStyle = (path) => ({
		marginRight: "10px",
		textTransform: "capitalize",
		fontFamily: "'Poppins', sans-serif",
		display: "flex",
		alignItems: "center",
		gap: "5px",
		backgroundColor: isActive(path)
			? "rgba(255, 255, 255, 0.1)"
			: "transparent",
		padding: "6px 12px",
		borderRadius: "8px",
		color: isActive(path) ? "rgb(255, 233, 106)" : "white",
		"&:hover": {
			backgroundColor: "rgba(255, 255, 255, 0.2)",
		},
	});

	const drawer = (
		<List
			sx={{
				backgroundColor: "rgba(67, 68, 68, 1.0)",
				height: "100%",
				color: "white",
			}}
		>
			{navItems.map((item) => (
				<ListItem
					key={item.path}
					component={Link}
					to={item.path}
					onClick={handleDrawerToggle}
					sx={{
						backgroundColor: isActive(item.path)
							? "rgba(255, 255, 255, 0.1)"
							: "transparent",
						margin: "8px",
						borderRadius: "8px",
						fontFamily: "'Poppins', sans-serif",
						color: isActive(item.path)
							? "rgb(255, 233, 106)"
							: "white",
						"&:hover": {
							backgroundColor: "rgba(255, 255, 255, 0.2)",
						},
					}}
				>
					<ListItemIcon
						sx={{
							color: isActive(item.path)
								? "rgb(255, 233, 106)"
								: "white",
							minWidth: "40px",
						}}
					>
						{item.icon}
					</ListItemIcon>
					<ListItemText
						primary={item.label}
						sx={{
							"& .MuiListItemText-primary": {
								fontFamily: "'Poppins', sans-serif",
							},
						}}
					/>
				</ListItem>
			))}
			<ListItem
				component={Link}
				to="/profile"
				onClick={handleDrawerToggle}
				sx={{
					backgroundColor: isActive("/profile")
						? "rgba(255, 255, 255, 0.1)"
						: "transparent",
					margin: "8px",
					borderRadius: "8px",
					fontFamily: "'Poppins', sans-serif",
					color: isActive("/profile")
						? "rgb(255, 233, 106)"
						: "white",
					"&:hover": {
						backgroundColor: "rgba(255, 255, 255, 0.2)",
					},
				}}
			>
				<ListItemIcon
					sx={{
						color: isActive("/profile")
							? "rgb(255, 233, 106)"
							: "white",
						minWidth: "40px",
					}}
				>
					<User size={20} />
				</ListItemIcon>
				<ListItemText
					primary="Profile"
					sx={{
						"& .MuiListItemText-primary": {
							fontFamily: "'Poppins', sans-serif",
						},
					}}
				/>
			</ListItem>
		</List>
	);

	return (
		<>
			<AppBar
				position="fixed"
				sx={{
					backgroundColor: "rgba(67, 68, 68, 1.0)",
					boxShadow: "none",
				}}
			>
				<Toolbar sx={{ justifyContent: "space-between" }}>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						{isMobile && (
							<IconButton
								color="inherit"
								aria-label="open drawer"
								edge="start"
								onClick={handleDrawerToggle}
								sx={{ mr: 2 }}
							>
								<MenuIcon size={24} />
							</IconButton>
						)}
						<Typography
							variant="h6"
							sx={{
								fontFamily: "'Poppins', sans-serif",
								fontWeight: "bold",
								flexGrow: isMobile ? 1 : 0,
							}}
						>
							SkillMingle
						</Typography>
					</Box>

					{!isMobile && (
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: 1,
							}}
						>
							{navItems.map((item) => (
								<Button
									key={item.path}
									component={Link}
									to={item.path}
									sx={commonButtonStyle(item.path)}
								>
									{item.icon}
									{item.label}
								</Button>
							))}
						</Box>
					)}

					<IconButton
						component={Link}
						to="/profile"
						sx={{
							...commonButtonStyle("/profile"),
							marginRight: 0,
							padding: "8px",
						}}
					>
						<User size={20} />
					</IconButton>
				</Toolbar>
			</AppBar>

			<Drawer
				variant="temporary"
				anchor="left"
				open={mobileOpen}
				onClose={handleDrawerToggle}
				ModalProps={{
					keepMounted: true,
				}}
				sx={{
					display: { xs: "block", md: "none" },
					"& .MuiDrawer-paper": {
						boxSizing: "border-box",
						width: 240,
						backgroundColor: "rgba(67, 68, 68, 0.95)",
						color: "white",
					},
				}}
			>
				{drawer}
			</Drawer>

			<Toolbar />
		</>
	);
};

export default NavbarDB;

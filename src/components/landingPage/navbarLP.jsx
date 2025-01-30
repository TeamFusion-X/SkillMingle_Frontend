import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	Box,
	useTheme,
	useMediaQuery,
} from "@mui/material";
import { Menu as MenuIcon, Home, Info, LogIn, UserPlus } from "lucide-react";

const NavbarLP = () => {
	const location = useLocation();
	const [mobileOpen, setMobileOpen] = useState(false);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const menuItems = [
		{ text: "Home", path: "/", icon: <Home size={20} /> },
		{ text: "About Us", path: "/about", icon: <Info size={20} /> },
		{ text: "Login", path: "/login", icon: <LogIn size={20} /> },
		{ text: "Signup", path: "/signup", icon: <UserPlus size={20} /> },
	];

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
			{menuItems.map((item) => (
				<ListItem
					key={item.text}
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
					<ListItemIcon sx={{ color: "white", minWidth: "40px" }}>
						{item.icon}
					</ListItemIcon>
					<ListItemText
						primary={item.text}
						sx={{
							"& .MuiListItemText-primary": {
								fontFamily: "'Poppins', sans-serif",
							},
						}}
					/>
				</ListItem>
			))}
		</List>
	);

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
						flexGrow: 1,
						fontFamily: "'Poppins', sans-serif",
						fontWeight: "bold",
					}}
				>
					SkillMingle
				</Typography>

				{isMobile ? (
					<>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="end"
							onClick={handleDrawerToggle}
						>
							<MenuIcon />
						</IconButton>
						<Drawer
							anchor="right"
							open={mobileOpen}
							onClose={handleDrawerToggle}
							ModalProps={{
								keepMounted: true,
							}}
							sx={{
								"& .MuiDrawer-paper": {
									width: 240,
									backgroundColor: "rgba(67, 68, 68, 1.0)",
								},
							}}
						>
							{drawer}
						</Drawer>
					</>
				) : (
					<Box sx={{ display: "flex" }}>
						{menuItems.map((item) => (
							<Button
								key={item.text}
								component={Link}
								to={item.path}
								color="inherit"
								sx={commonButtonStyle(item.path)}
							>
								{item.icon}
								{item.text}
							</Button>
						))}
					</Box>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default NavbarLP;

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Spinner = () => {
	return (
		<Box
			sx={{
				position: "fixed",
				top: 0,
				left: "50%",
				transform: "translateX(-50%)",
				zIndex: 9999, // Ensure it's above other content
				padding: "10px",
				backgroundColor: "transparent",
			}}
		>
			<CircularProgress sx={{ color: "rgb(125, 228, 232)" }} />
		</Box>
	);
};

export default Spinner;

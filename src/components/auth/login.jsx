import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
	Card,
	CardContent,
	Typography,
	TextField,
	Button,
	Box,
} from "@mui/material";

const Login = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [message, setMessage] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const api_url = import.meta.env.VITE_API_URL;

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				`${api_url}/users/login`,
				formData
			);

			console.log(response);
			setMessage(`Login successful: ${response.data.message}`);
		} catch (error) {
			setMessage(
				error.response?.data?.message ||
					"An error occurred. Please try again."
			);
		}
	};

	return (
		<Box>
			<Card
				style={{
					width: 400,
					padding: 20,
					backgroundColor: "rgba(255, 255, 255, 0.2)",
					backdropFilter: "blur(15px)",
					borderRadius: "12px",
					boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
				}}
			>
				<CardContent>
					<Typography
						variant="h5"
						component="div"
						gutterBottom
						style={{
							color: "#ffffff",
							textAlign: "center",
							marginBottom: "20px",
							fontWeight: "bold",
						}}
					>
						Login
					</Typography>
					<form onSubmit={handleSubmit}>
						<Box mb={2}>
							<TextField
								fullWidth
								label="Email"
								name="email"
								type="email"
								value={formData.email}
								onChange={handleChange}
								required
								InputLabelProps={{
									style: { color: "#ffffff" },
								}}
								inputProps={{ style: { color: "#ffffff" } }}
							/>
						</Box>
						<Box mb={2}>
							<TextField
								fullWidth
								label="Password"
								name="password"
								type="password"
								value={formData.password}
								onChange={handleChange}
								required
								InputLabelProps={{
									style: { color: "#ffffff" },
								}}
								inputProps={{ style: { color: "#ffffff" } }}
							/>
						</Box>
						<Button
							variant="contained"
							color="primary"
							type="submit"
							fullWidth
							style={{ fontWeight: "bold" }}
						>
							Login
						</Button>
					</form>
					<Box mt={2} display="flex" justifyContent="space-between">
						<Typography
							variant="body2"
							style={{ color: "#ffffff" }}
						>
							<Link
								to="/forgotPassword"
								
								style={{
									color: "#00FFFF",
									textDecoration: "none",
								}}
							>
								Forgot Password?
							</Link>
						</Typography>
					</Box>
					{message && (
						<Typography
							color="error"
							mt={2}
							style={{ marginTop: "10px" }}
						>
							{message}
						</Typography>
					)}
				</CardContent>
			</Card>
		</Box>
	);
};

export default Login;

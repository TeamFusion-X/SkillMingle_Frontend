import { useState } from "react";
import axios from "axios";
import {
	Card,
	CardContent,
	Typography,
	TextField,
	Button,
	Box,
} from "@mui/material";

const Signup = () => {
	const [formData, setFormData] = useState({
		username: "",
		name: "",
		email: "",
		password: "",
		passwordConfirm: "",
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
				`${api_url}/users/signup`,
				formData
			); // Replace with your API endpoint
			setMessage(`Signup successful: ${response.data.message}`);
		} catch (error) {
			setMessage(
				error.response?.data?.message ||
					"An error occurred. Please try again."
			);
		}
	};

	return (
		<Box style={{ paddingTop : "40px"}}>
			<Card style={{ width: 400 }}>
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
						Register
					</Typography>
					<form onSubmit={handleSubmit}>
						<Box mb={2}>
							<TextField
								fullWidth
								label="Username"
								name="username"
								value={formData.username}
								onChange={handleChange}
								required
								variant="outlined"
								InputLabelProps={{
									style: { color: "#ffffff" },
								}}
								inputProps={{ style: { color: "#ffffff" } }}
							/>
						</Box>
						<Box mb={2}>
							<TextField
								fullWidth
								label="Name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								required
								variant="outlined"
								InputLabelProps={{
									style: { color: "#ffffff" },
								}}
								inputProps={{ style: { color: "#ffffff" } }}
							/>
						</Box>
						<Box mb={2}>
							<TextField
								fullWidth
								label="Email"
								name="email"
								type="email"
								value={formData.email}
								onChange={handleChange}
								required
								variant="outlined"
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
								variant="outlined"
								InputLabelProps={{
									style: { color: "#ffffff" },
								}}
								inputProps={{ style: { color: "#ffffff" } }}
							/>
						</Box>
						<Box mb={2}>
							<TextField
								fullWidth
								label="Confirm Password"
								name="passwordConfirm"
								type="password"
								value={formData.passwordConfirm}
								onChange={handleChange}
								required
								variant="outlined"
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
							style={{
								padding: "10px",
								fontSize: "16px",
								fontWeight: "bold",
							}}
						>
							Signup
						</Button>
					</form>
					{message && (
						<Typography
							color="error"
							style={{ marginTop: "20px", textAlign: "center" }}
						>
							{message}
						</Typography>
					)}
				</CardContent>
			</Card>
		</Box>
	);
};

export default Signup;

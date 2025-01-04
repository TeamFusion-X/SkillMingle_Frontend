import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
	Card,
	CardContent,
	Typography,
	TextField,
	Button,
	Box,
} from "@mui/material";

const ResetPassword = () => {
	const { token } = useParams();
	const [formData, setFormData] = useState({
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
			const response = await axios.patch(
				`${api_url}/users/resetPassword/${token}`,
				formData
			);
			setMessage(response.data.message || "Password reset successful!");
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
						Reset Password
					</Typography>
					<form onSubmit={handleSubmit}>
						<Box mb={2}>
							<TextField
								fullWidth
								label="New Password"
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
						<Box mb={2}>
							<TextField
								fullWidth
								label="Confirm New Password"
								name="passwordConfirm"
								type="password"
								value={formData.passwordConfirm}
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
						>
							Reset Password
						</Button>
					</form>
					{message && (
						<Typography color="primary" mt={2}>
							{message}
						</Typography>
					)}
				</CardContent>
			</Card>
		</Box>
	);
};

export default ResetPassword;

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

const ForgotPassword = () => {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const api_url = import.meta.env.VITE_API_URL;

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				`${api_url}/users/forgotPassword`,
				{ email }
			);
			setMessage(response.data.message);
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
						Forgot Password
					</Typography>
					<form onSubmit={handleSubmit}>
						<Box mb={2}>
							<TextField
								fullWidth
								label="Email"
								name="email"
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
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
							Send Reset Link
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

export default ForgotPassword;

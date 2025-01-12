import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	Card,
	CardContent,
	Typography,
	TextField,
	Button,
	Box,
} from "@mui/material";
import { forgotPassword } from "../../redux/actions/authActions";

const ForgotPassword = () => {
	const message = useSelector((state) => state.auth.message || state.auth.error)
	const dispatch = useDispatch();

	const [email, setEmail] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(forgotPassword(email));
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

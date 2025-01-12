import { useState } from "react";
import { useParams } from "react-router-dom";
import {
	Card,
	CardContent,
	Typography,
	TextField,
	Button,
	Box,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../redux/actions/authActions";

const ResetPassword = () => {
	const { token } = useParams();
	const dispatch = useDispatch();
	const message = useSelector((state) => state.auth.message || state.auth.error);

	const [formData, setFormData] = useState({
		password: "",
		passwordConfirm: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(resetPassword(formData, token));
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

import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	Card,
	CardContent,
	Typography,
	TextField,
	Button,
	Box,
} from "@mui/material";
import { loginUser } from "../../redux/actions/authActions";

const Login = () => {
	const dispatch = useDispatch();
	const message = useSelector((state) => state.auth.error)
	
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};


	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(loginUser(formData));		
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

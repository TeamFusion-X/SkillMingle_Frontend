import { useEffect } from "react";
import LandingPage from "./components/landingPage/landingPage";
import Signup from "./components/auth/signup";
import Login from "./components/auth/login";
import ForgotPassword from "./components/auth/forgotPassword";
import ResetPassword from "./components/auth/resetPassword";
import About from "./components/misc/about";
import DashBoard from "./components/dashboard/dashBoard";
import NavbarLP from "./components/landingPage/navbarLP";
import NavbarDB from "./components/dashboard/navbarDB";
import Spinner from "./utils/spinner";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./utils/theme";
import { BackgroundBox } from "./utils/backgroundBox";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { checkLogin } from "./redux/actions/authActions";
import Profile from "./components/user/profile";

const UnauthenticatedRoutes = () => (
	<BackgroundBox>
		<NavbarLP />
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="/forgotPassword" element={<ForgotPassword />} />
			<Route path="/resetPassword/:token" element={<ResetPassword />} />
			<Route path="/about" element={<About />} />
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	</BackgroundBox>
);

const AuthenticatedRoutes = () => (
	<BackgroundBox>
		<NavbarDB />
		<Routes>
			<Route path="/dashboard" element={<DashBoard />} />
			<Route path="/profile" element={<Profile />} />
			<Route path="*" element={<Navigate to="/dashboard" />} />
		</Routes>
	</BackgroundBox>
);

function App() {
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	const loading = useSelector((state) => state.spinner.loading);
	
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkLogin());	
	}, [dispatch])

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{loading && <Spinner />}
			{isLoggedIn ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
		</ThemeProvider>
	);
}

export default App;

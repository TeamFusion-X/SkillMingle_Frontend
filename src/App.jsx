import { useEffect, useState } from "react";
import LandingPage from "./components/landingPage/landingPage";
import Signup from "./components/auth/signup";
import Login from "./components/auth/login";
import ForgotPassword from "./components/auth/forgotPassword";
import ResetPassword from "./components/auth/resetPassword";
import About from "./components/about/about";
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
import RequestPage from "./components/request/requestPage";
import LearningChats from "./components/chat/learn/learningChats";
import TeachingChats from "./components/chat/teach/teachingChats";
import SearchPage from "./components/search/searchPage";
import Notification from "./components/notification/notification";
import { checkServerAPI } from "./services/authAPI";
import ServerWaitCard from "./utils/serverWaitCard";

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
			<Route path="/about/:username" element={<Profile />} />
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
			<Route path="/requests" element={<RequestPage />} />
			<Route path="/learn" element={<LearningChats />} />
			<Route path="/teach" element={<TeachingChats />} />
			<Route path="/search" element={<SearchPage />} />
			<Route path="/notifications" element={<Notification />} />
			<Route path="/about/:username" element={<Profile />} />
			<Route path="*" element={<Navigate to="/dashboard" />} />
		</Routes>
	</BackgroundBox>
);

function App() {
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	const loading = useSelector((state) => state.spinner.loading);
	const [serverReady, setServerReady] = useState(false);
	const [attempts, setAttempts] = useState(0);

	const dispatch = useDispatch();

	useEffect(() => {
		if (attempts >= 3) {
			return;
		}

		const checkServer = async () => {
			try {
				const response = await checkServerAPI();
				console.log(response);
				if (response.status === "success") {
					setServerReady(true);
				} else {
					setAttempts((prev) => prev + 1);
				}
			} catch {
				setAttempts((prev) => prev + 1);
			}
		};

		const timeoutId = setTimeout(checkServer, attempts > 0 ? 30000 : 0);

		return () => clearTimeout(timeoutId);
	}, [attempts]);

	useEffect(() => {
		if (serverReady) {
			dispatch(checkLogin());
		}
	}, [serverReady, dispatch]);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<BackgroundBox>
				{!serverReady ? <ServerWaitCard/> : (
					<>
						{loading && <Spinner />}
						{isLoggedIn ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
					</>
				)}
			</BackgroundBox>
		</ThemeProvider>
	);
}

export default App;

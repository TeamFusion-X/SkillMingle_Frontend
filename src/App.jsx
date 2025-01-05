import LandingPage from "./components/landingPage/landingPage";
import Signup from "./components/auth/signup";
import Login from "./components/auth/login";
import { Routes, Route } from "react-router-dom";
import NavbarLP from "./components/landingPage/navbarLP";
import ForgotPassword from "./components/auth/forgotPassword";
import ResetPassword from "./components/auth/resetPassword";
import About from "./components/misc/about";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./utils/theme";
import { BackgroundBox } from "./utils/backgroundBox";
import DashBoard from "./components/dashboard/DashBoard";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<BackgroundBox>
				<NavbarLP />
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route
						path="/forgotPassword"
						element={<ForgotPassword />}
					/>
					<Route
						path="/resetPassword/:token"
						element={<ResetPassword />}
						/>
					<Route path="/dashboard" element={<DashBoard />} />
					<Route path="/about" element={<About />} />
					<Route path="*" element={<h1>404 Not Found</h1>} />
				</Routes>
			</BackgroundBox>
		</ThemeProvider>
	);
}

export default App;

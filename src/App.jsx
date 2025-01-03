import LandingPage from "./components/landingPage/LandingPage";
import Signup from "./components/auth/signup";
import Login from "./components/auth/login";
import { Routes, Route } from "react-router-dom";
import ForgotPassword from "./components/auth/forgotPassword";
import ResetPassword from "./components/auth/resetPassword";

function App() {
	return (
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="/forgotPassword" element={<ForgotPassword />} />
			<Route path="/resetPassword/:token" element={<ResetPassword />} />
			<Route path="*" element={<h1>404 Not Found</h1>} />
		</Routes>
	);
}

export default App;

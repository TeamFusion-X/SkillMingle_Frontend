import {
	forgotPasswordAPI,
	resetPasswordAPI,
	loginAPI,
	signupAPI,
	checkLoginAPI,
	logoutUserAPI
} from "../../services/authAPI";
import { setSpinner } from "./spinnerActions";
import { updateUser } from "./userAction";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const FAILURE = "FAILURE";
export const SET_MESSAGE = "SET_MESSAGE";
export const CLEAR_MESSAGE = "CLEAR_MESSAGE";

export const loginSuccess = () => ({
	type: LOGIN_SUCCESS,
});

export const logoutSuccess = () =>({
	type: LOGOUT_SUCCESS,
});

export const failure = (error) => ({
	type: FAILURE,
	payload: error,
});

export const setMessage = (message) => ({
	type: SET_MESSAGE,
	payload: message,
});

export const clearMessage = () => ({
	type : CLEAR_MESSAGE,
});

export const loginUser = (credentials) => async (dispatch) => {
	dispatch(setSpinner(true));
	try {
		const response = await loginAPI(credentials);
		dispatch(updateUser(response.data.user));
		dispatch(loginSuccess(response.data.user));
	} catch (error) {
		dispatch(failure(error.message));
	} finally {
		dispatch(setSpinner(false));
		
		setTimeout(() => {
			dispatch(clearMessage());
		}, 3000);
	}
};

export const signupUser = (signupData) => async (dispatch) => {
	dispatch(setSpinner(true));
	try {
		const response = await signupAPI(signupData);
		dispatch(updateUser(response.data.user));
		dispatch(loginSuccess());
	} catch (error) {
		dispatch(failure(error.message));
	} finally {
		dispatch(setSpinner(false));

		setTimeout(() => {
			dispatch(clearMessage());
		}, 3000);
	}
};

export const forgotPassword = (email) => async (dispatch) => {
	dispatch(setSpinner(true));
	try {
		await forgotPasswordAPI(email);
		dispatch(setMessage("Password reset link sent."));
	} catch (error) {
		dispatch(failure(error.message));
	} finally {
		dispatch(setSpinner(false));

		setTimeout(() => {
			dispatch(clearMessage());
		}, 3000);
	}
};

export const resetPassword = (resetData, token) => async (dispatch) => {
	dispatch(setSpinner(true));
	try {
		await resetPasswordAPI(resetData, token);
		dispatch(setMessage("Password reset successful."));
	} catch (error) {
		dispatch(failure(error.message));
	} finally {
		dispatch(setSpinner(false));

		setTimeout(() => {
			dispatch(clearMessage());
		}, 3000);
	}
};

export const checkLogin = () => async (dispatch) => {
	dispatch(setSpinner(true));
	try {
		const response = await checkLoginAPI();
		dispatch(updateUser(response.data.user))
		dispatch(loginSuccess());
	} catch (error) {
		console.log("Not logged in!");
	} finally {
		dispatch(setSpinner(false));
	}
}

export const logoutUser = () => async (dispatch) => {
	dispatch(setSpinner(true));
	try {
		await logoutUserAPI();
		dispatch(logoutSuccess());
	} catch (error) {
		console.log("Not logged out!");
	} finally {
		dispatch(setSpinner(false));
	}
}
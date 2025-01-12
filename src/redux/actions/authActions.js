import {
	forgotPasswordAPI,
	resetPasswordAPI,
	loginAPI,
	signupAPI,
} from "../../services/authAPI";
import { setSpinner } from "./spinnerActions";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const FAILURE = "FAILURE";
export const SET_MESSAGE = "SET_MESSAGE";

export const loginSuccess = () => ({
	type: LOGIN_SUCCESS,
});

export const failure = (error) => ({
	type: FAILURE,
	payload: error,
});

export const setMessage = (message) => ({
	type: SET_MESSAGE,
	payload: message,
});

export const loginUser = (credentials) => async (dispatch) => {
	dispatch(setSpinner(true));
	try {
		await loginAPI(credentials);
		dispatch(loginSuccess());
	} catch (error) {
		dispatch(failure(error.message));
	} finally {
		dispatch(setSpinner(false));
	}
};

export const signupUser = (signupData) => async (dispatch) => {
	dispatch(setSpinner(true));
	try {
		await signupAPI(signupData);
		dispatch(loginSuccess());
	} catch (error) {
		dispatch(failure(error.message));
	} finally {
		dispatch(setSpinner(false));
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
	}
};

import {
	LOGIN_SUCCESS,
	FAILURE,
	SET_MESSAGE,
	CLEAR_MESSAGE,
} from "../actions/authActions";

const initialState = {
	isLoggedIn: false,
	error: null,
	message: null,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return { ...state, isLoggedIn: true, error: null };
		case FAILURE:
			return { ...state, isLoggedIn: false, error: action.payload };
		case SET_MESSAGE:
			return { ...state, message: action.payload };
		case CLEAR_MESSAGE:
			return { ...state, message: "", error: "" };
		default:
			return state;
	}
};

export default authReducer;

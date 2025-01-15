import { combineReducers } from "@reduxjs/toolkit";
import spinnerReducer from "./reducers/spinnerReducer";
import authReducer from "./reducers/authReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
	spinner: spinnerReducer,
	auth: authReducer,
	user: userReducer,
});

export default rootReducer;

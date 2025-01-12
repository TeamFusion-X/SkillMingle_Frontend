import { combineReducers } from "@reduxjs/toolkit";
import spinnerReducer from "./reducers/spinnerReducer";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
	spinner: spinnerReducer,
	auth: authReducer,
});

export default rootReducer;

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { thunk } from "redux-thunk";
import { logger } from "redux-logger";

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => {
		const middlewares = getDefaultMiddleware().concat(thunk);

		if (import.meta.env.VITE_ENV === "development") {
			middlewares.push(logger);
		}

		return middlewares;
	},
});

export default store;

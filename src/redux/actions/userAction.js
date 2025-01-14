import { getUserProfileAPI } from "../../services/userAPI";
import { setSpinner } from "./spinnerActions";

export const UPDATE_USER = "UPDATE_USER";
export const FAILURE = "FAILURE";
export const CLEAR_MESSAGE = "CLEAR_MESSAGE";

export const updateUser = (userData) => ({
    type : UPDATE_USER,
    payload : userData,
})

export const failure = (error) => ({
	type: FAILURE,
	payload: error,
});

export const clearMessage = () => ({
    type: CLEAR_MESSAGE,
})
export const fetchUserData = () => async (dispatch) => {
    dispatch(setSpinner(true))
    try {
        const userData = await getUserProfileAPI();
        const data = userData.data.user;
        dispatch(updateUser(data));
    } catch (error) {
        dispatch(failure(error.message));
    } finally {
        dispatch(setSpinner(false));

        setTimeout(() => {
			dispatch(clearMessage());
		}, 3000);
    }
}

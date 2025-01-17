import { getUserProfileAPI, updateUserProfileAPI, updateUserProfileDPAPI } from "../../services/userAPI";
import { setSpinner } from "./spinnerActions";

export const UPDATE_USER = "UPDATE_USER";
export const FAILURE = "FAILURE";
export const CLEAR_MESSAGE = "CLEAR_MESSAGE";
export const UPDATE_USER_PROFILE = "UPDATE_USER_PROFILE";
export const UPDATE_USER_DP = "UPDATE_USER_DP";
 
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

export const updateUserProfile = (updatedData) => ({
    type: UPDATE_USER_PROFILE,
    payload: updatedData,
});

export const updateUserProfileDP = (updatedDP) => ({
    type: UPDATE_USER_DP,
    payload: updatedDP,
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
export const updateUserData = (userData) => async (dispatch) => {
    dispatch(setSpinner(true));
    try {
        const response = await updateUserProfileAPI(userData);
        const updatedData = response.data.user;
        dispatch(updateUserProfile(updatedData));
      } catch (error) {
        dispatch(failure(error.message));
      } finally {
        dispatch(setSpinner(false));
      }
}

export const updateUserDP = (userDP) => async (dispatch) => {
    dispatch(setSpinner(true));
    try {
        const response = await updateUserProfileDPAPI(userDP);
        console.log(response);
        const updatedData = response.data.user;
        dispatch(updateUserProfileDP(updatedData));
      } catch (error) {
        dispatch(failure(error.message));
      } finally {
        dispatch(setSpinner(false));
      }
}

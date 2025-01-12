import { loginAPI, signupAPI } from '../../services/auth';
import { setSpinner } from './spinnerActions';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Action creators
export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const loginUser = (credentials) => async (dispatch) => {
  dispatch(setSpinner(true));
  try {
    await loginAPI(credentials); 
    dispatch(loginSuccess());
  } catch (error) {
    dispatch(loginFailure(error.message));
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
      dispatch(loginFailure(error.message));
    } finally {
      dispatch(setSpinner(false));
    } 
}



import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/authActions';

const initialState = {
  isLoggedIn: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true, error: null };
    case LOGIN_FAILURE:
      return { ...state, isLoggedIn: false, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;

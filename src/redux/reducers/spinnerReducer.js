import { SET_SPINNER } from '../actions/spinnerActions';

const initialState = {
  loading: false,
};

const spinnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SPINNER:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default spinnerReducer;

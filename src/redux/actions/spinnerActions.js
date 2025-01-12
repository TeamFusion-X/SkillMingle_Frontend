export const SET_SPINNER = 'SET_SPINNER';

export const setSpinner = (isLoading) => ({
  type: SET_SPINNER,
  payload: isLoading,
});

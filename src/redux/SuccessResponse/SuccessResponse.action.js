import * as actions from './SuccessResponse.constants';

export const returnSuccess = (message) => (dispatch) => {
  dispatch({
    type: actions.SET_SUCCESS,
    payload: message,
  });
  setTimeout(() => dispatch(clearSuccess()), 9000);
};

export const clearSuccess = () => {
  return {
    type: actions.CLEAR_SUCCESS,
  };
};

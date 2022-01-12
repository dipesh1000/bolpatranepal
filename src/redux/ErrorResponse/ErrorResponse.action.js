import { useHistory } from 'react-router-dom';
import { logout } from '../../components/Auth/redux/Auth.actions';
import * as actions from './ErrorResponse.constants';

export const returnError = (message) => (dispatch) => {
  dispatch({
    type: actions.SET_ERROR,
    payload: message,
  });
  console.log(message, 'message');
  if (message === 'Unauthorized') {
    const token = localStorage.getItem('token');
    dispatch(logout(token));
  }
  setTimeout(() => dispatch(clearError()), 9000);
};

export const clearError = () => {
  return {
    type: actions.CLEAR_ERROR,
  };
};

import * as actions from './Auth.constants';
import { userLogin } from '../../../api/auth/authApi';
import { closeModal } from '../../../redux/Modal/Modal.action';

// Login
export const login = (data) => (dispatch) => {
  console.log(data, 'Login Data from Action');
  localStorage.setItem('data', JSON.stringify(data));
  userLogin(data)
    .then((res) => {
      console.log(res, 'From User Login');

      dispatch(closeModal('login'));
      dispatch({
        type: actions.USER_LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      //   dispatch(
      //     returnErrors(err?.response?.data, err?.response?.status, "LOGIN_FAIL")
      //   );
      dispatch({
        type: actions.USER_LOGIN_FAIL,
      });
    });
};

import * as actions from './Auth.constants';
import {
  userLogin,
  userLogout,
  userOtpRequest,
  userOtpVerify,
  userRegister,
} from '../../../api/auth/authApi';
import { closeModal, openModal } from '../../../redux/Modal/Modal.action';
import { returnSuccess } from '../../../redux/SuccessResponse/SuccessResponse.action';
import { returnError } from '../../../redux/ErrorResponse/ErrorResponse.action';

// Login
export const login = (data) => (dispatch) => {
  console.log(data, 'Login Data from Action');
  userLogin(data)
    .then((res) => {
      dispatch(returnSuccess(res?.data));
      dispatch(closeModal('login'));
      dispatch({
        type: actions.USER_LOGIN_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      dispatch(returnError(err?.response?.data));
      dispatch({
        type: actions.USER_LOGIN_FAIL,
      });
    });
};

export const register = (data) => (dispatch) => {
  dispatch({ type: actions.USER_LOADING });
  userRegister(data)
    .then((res) => {
      dispatch(returnSuccess(res.data));
      dispatch(closeModal('register'));
      dispatch(otprequest(data));
      dispatch({
        type: actions.USER_REGISTER_SUCCESS,
        payload: res.data,
      });
      dispatch(openModal('otp'));
    })
    .catch((err) => {
      dispatch(returnError(err));
      dispatch({
        type: actions.USER_REGISTER_FAIL,
      });
    });
};

export const otprequest = (data) => (dispatch) => {
  userOtpRequest(data)
    .then((res) => {
      dispatch(returnSuccess(res.data));
      dispatch({
        type: actions.OTP_REQUEST_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnError(err));
      dispatch({
        type: actions.OTP_REQUEST_FAIL,
      });
    });
};

export const otpVerify = (data) => (dispatch) => {
  userOtpVerify(data)
    .then((res) => {
      dispatch(returnSuccess(res.data));
      dispatch({
        type: actions.OTP_VERIFY_SUCCESS,
        payload: res.data.data,
      });
      dispatch(openModal('login'));
    })
    .catch((err) => {
      dispatch(returnError(err));
      dispatch({
        type: actions.OTP_VERIFY_FAIL,
      });
    });
};

export const logout = (data) => (dispatch) => {
  userLogout(data)
    .then((res) => {
      dispatch(returnSuccess(res.data));
      dispatch({
        type: actions.USER_LOGOUT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch(returnError(error.message));
      dispatch({
        type: actions.USER_LOGOUT_FAIL,
      });
    });
};

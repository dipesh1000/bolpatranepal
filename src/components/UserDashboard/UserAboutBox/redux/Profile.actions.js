import {
  profileUpdate,
  userProfileDetails,
} from '../../../../api/auth/authApi';
import { returnError } from '../../../../redux/ErrorResponse/ErrorResponse.action';
import * as actions from './Profile.contants';

export const updateProfile = (data) => (dispatch) => {
  dispatch({ type: actions.PROFILE_LOADING });
  profileUpdate(data)
    .then((res) => {
      dispatch({
        type: actions.PROFILE_SUCCESS,
        payload: res.data,
      });
      dispatch(fetchProfile());
    })
    .catch((error) => {
      dispatch({ type: actions.PROFILE_FAIL, error: error });
    });
};

export const fetchProfile = () => (dispatch) => {
  dispatch({ type: actions.FETCH_PROFILE_LOADING });
  userProfileDetails()
    .then((res) => {
      dispatch({
        type: actions.FETCH_PROFILE_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((error) => {
      dispatch(returnError(error?.response?.data.message));
      dispatch({ type: actions.FETCH_PROFILE_FAIL, error: error });
    });
};

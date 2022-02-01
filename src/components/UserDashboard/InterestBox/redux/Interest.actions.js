import {
  getAllProcrumentInterest,
  getAllUserInterest,
  storeUserInterest,
} from '../../../../api/interest/interestApi';
import { returnError } from '../../../../redux/ErrorResponse/ErrorResponse.action';
import { returnSuccess } from '../../../../redux/SuccessResponse/SuccessResponse.action';
import * as actions from './Interest.constants';

export const fetchAllProcrumentInterest = () => (dispatch) => {
  dispatch({ type: actions.FETCH_ALL_INTEREST_LOADING });
  getAllProcrumentInterest()
    .then((res) => {
      dispatch({
        type: actions.FETCH_ALL_INTEREST_SUCCESS,
        payload: res?.data?.data,
      });
    })
    .catch((error) => {
      dispatch({ type: actions.FETCH_ALL_INTEREST_FAIL, error: error });
    });
};

export const userInterest = (data) => (dispatch) => {
  dispatch({ type: actions.USER_INTEREST_LOADING });
  storeUserInterest(data)
    .then((res) => {
      dispatch({
        type: actions.USER_INTEREST_SUCCESS,
        payload: res.data,
      });
      dispatch(returnSuccess(res.data));
    })

    .catch((error) => dispatch({ type: actions.USER_INTEREST_FAIL }));
};

export const fetchAllUserInterest = () => (dispatch) => {
  dispatch({ type: actions.FETCH_USER_INTEREST_LOADING });
  getAllUserInterest()
    .then((res) => {
      // console.log(res?.data?.data, 'fRom res');
      dispatch({
        type: actions.FETCH_USER_INTEREST_SUCCESS,
        payload: res?.data?.data,
      });
    })
    .catch((error) => {
      // console.log(error.response.data.message, 'line 50');
      dispatch(
        returnError(
          error &&
            error.response &&
            error.response.data &&
            error.response.data.message
        )
      );
      dispatch({ type: actions.FETCH_USER_INTEREST_FAIL, error: error });
    });
};

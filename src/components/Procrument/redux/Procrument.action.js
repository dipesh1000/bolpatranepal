import {
  fetchBudgetParams,
  fetchProjectTypeParams,
  fetchTenderParams,
  getAllTender,
  getSingleTendor,
} from '../../../api/tender/tenderApi';
import * as actions from './Procrument.constant';

export const getTenderList = (page) => (dispatch) => {
  dispatch({ type: actions.PROCRUMENT_LOADING });
  getAllTender(page)
    .then((res) => {
      // console.log(res.data.data, 'From Server');
      dispatch({
        type: actions.PROCRUMENT_SUCCESS,
        payload: res?.data?.data,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: actions.PROCRUMENT_FAIL, error: error });
    });
};

export const getTenderSingle = (params) => (dispatch) => {
  dispatch({ type: actions.SINGLE_PROCRUMENT_LOADING });
  getSingleTendor(params)
    .then((res) => {
      dispatch({
        type: actions.SINGLE_PROCRUMENT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      // console.log(error, 'From error');
      dispatch({ type: actions.SINGLE_PROCRUMENT_FAIL, error: error });
    });
};

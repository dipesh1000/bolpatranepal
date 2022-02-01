import {
  fetchAllProvinces,
  searchList,
  searchListWithMeta,
} from '../../../api/search/searchApi';
import {
  getAllTender,
  getAllTenderByUserInterest,
  getFilterInterestTender,
} from '../../../api/tender/tenderApi';
import { returnSuccess } from '../../../redux/SuccessResponse/SuccessResponse.action';
import * as actions from './Search.constant';

export const getTenderList = (page) => (dispatch) => {
  dispatch({ type: actions.FETCH_PROCRUMENT_LOADING });
  getAllTender(page)
    .then((res) => {
      // console.log(res.data.data, 'From Server');
      dispatch({
        type: actions.FETCH_PROCRUMENT_SUCCESS,
        payload: res?.data?.data,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: actions.FETCH_PROCRUMENT_FAIL, error: error });
    });
};

export const getUserInterestInterest = () => (dispatch) => {
  dispatch({ type: actions.FETCH_ALL_TENDERS_BY_INTEREST_LOADING });
  getAllTenderByUserInterest()
    .then((res) => {
      dispatch({
        type: actions.FETCH_ALL_TENDERS_BY_INTEREST_SUCCESS,
        payload: res?.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: actions.FETCH_ALL_TENDERS_BY_INTEREST_FAIL,
        error: err,
      });
    });
};

export const getListSearching = (data) => (dispatch) => {
  dispatch({ type: actions.SEARCH_LIST_LOADING });
  searchList(data)
    .then((res) => {
      dispatch(returnSuccess(res.data));
      dispatch({
        type: actions.SEARCH_LIST_SUCCESS,
        payload: res.data,
      });
      dispatch({
        type: actions.SET_SEARCH_PARAMS,
        payload: data,
      });
    })
    .catch((err) => {
      console.log(err, 'From response in error');
    });
};

export const getListSearchingWithMeta = (data) => (dispatch) => {
  dispatch({ type: actions.META_SEARCH_LOADING });
  searchListWithMeta(data)
    .then((res) => {
      dispatch(returnSuccess(res.data));
      dispatch({
        type: actions.META_SEARCH_SUCCESS,
        payload: res.data,
      });
      dispatch({
        type: actions.SET_SEARCH_META,
        payload: data,
      });
    })
    .catch((err) => {
      console.log(err, 'From response in error');
    });
};

export const getFilterListByInterest = (data) => (dispatch) => {
  dispatch({ type: actions.FETCH_FILTER_INTEREST_DATA_LOADING });
  getFilterInterestTender()
    .then((res) => {
      console.log(res, 'from res line 89');
      dispatch({
        type: actions.FETCH_FILTER_INTEREST_DATA_SUCCESS,
        payload: res?.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: actions.FETCH_FILTER_INTEREST_DATA_FAIL,
        error: err,
      });
    });
};

export const getAllProvince = () => (dispatch) => {
  dispatch({ type: actions.FETCH_PROVINCE_LOADING });
  fetchAllProvinces()
    .then((res) => {
      dispatch({
        type: actions.FETCH_PROVINCE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err, 'From response Error');
    });
};

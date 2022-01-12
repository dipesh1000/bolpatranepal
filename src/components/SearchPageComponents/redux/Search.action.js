import {
  fetchAllProvinces,
  searchList,
  searchListWithMeta,
} from '../../../api/search/searchApi';
import { returnSuccess } from '../../../redux/SuccessResponse/SuccessResponse.action';
import * as actions from './Search.constant';

export const getListSearching = (data) => (dispatch) => {
  console.log(data, 'From response line 6');
  dispatch({ type: actions.SEARCH_LIST_LOADING });
  searchList(data)
    .then((res) => {
      console.log(res, 'From response');
      dispatch(returnSuccess(res.data));
      dispatch({
        type: actions.SEARCH_LIST_SUCCESS,
        payload: res.data,
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
      console.log(data, 'From getListSearchingWithMeta');
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

export const getAllProvince = () => (dispatch) => {
  dispatch({ type: actions.FETCH_PROVINCE_LOADING });
  fetchAllProvinces()
    .then((res) => {
      console.log(res.data, 'From Response');
      dispatch({
        type: actions.FETCH_PROVINCE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err, 'From response Error');
    });
};

import {
  addUserWishList,
  fetchAllUsersWishlist,
  removeSavedWishList,
} from '../../../api/wishlist/wishlistApi';
import { returnError } from '../../../redux/ErrorResponse/ErrorResponse.action';
import { returnSuccess } from '../../../redux/SuccessResponse/SuccessResponse.action';
import * as actions from './constant';

export const storeUserWishList = (data) => (dispatch) => {
  dispatch({ type: actions?.ADD_WISHLIST_LOADING });
  addUserWishList(data)
    .then((res) => {
      dispatch(returnSuccess(res?.data));
      dispatch({
        type: actions.ADD_WISHLIST_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((error) => {
      dispatch(returnError(error?.response?.data));
      dispatch({ type: actions.ADD_WISHLIST_FAIL, error: error });
    });
};

export const removeSavedWishListItem = (data) => (dispatch) => {
  dispatch({ type: actions.REMOVE_WISHLIST_LOADING });
  removeSavedWishList(data)
    .then((res) => {
      dispatch(returnSuccess(res?.data));
      dispatch({
        type: actions.REMOVE_WISHLIST_SUCCESS,
        payload: res?.data,
      });
    })
    .catch((err) => {
      dispatch(returnError(err?.response?.data));
      dispatch({
        type: actions.REMOVE_WISHLIST_FAIL,
        error: err,
      });
    });
};

export const getUserWishList = () => (dispatch) => {
  dispatch({ type: actions.FETCH_WISHLIST_LOADING });
  fetchAllUsersWishlist()
    .then((res) => {
      dispatch({
        type: actions.FETCH_WISHLIST_SUCCESS,
        payload: res?.data?.data?.tenders,
      });
    })
    .catch((error) => {
      console.log(error?.error, 'From error');
      dispatch({ type: actions.FETCH_WISHLIST_FAIL, error: error });
    });
};

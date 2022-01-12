import { fetchAllAds } from '../../../api/ads/adsApi';
import * as actions from './constants';

export const getAllAds = () => (dispatch) => {
  dispatch({ type: actions.FETCH_ADS_LOADING });
  fetchAllAds()
    .then((res) => {
      console.log(res, 'fRom response');
      dispatch({
        type: actions.FETCH_ADS_SUCCESS,
        payload: res?.data?.data,
      });
    })
    .catch((error) => {
      dispatch({ type: actions.FETCH_ADS_FAIL, error: error });
    });
};

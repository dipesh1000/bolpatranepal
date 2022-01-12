import * as actions from './constants';

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

export const adsReducers = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_ADS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case actions.FETCH_ADS_SUCCESS:
      return {
        isLoading: false,
        data: action.payload,
      };

    case actions.FETCH_ADS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

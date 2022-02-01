import * as actions from './constant';

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};
export const wishListReducers = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_WISHLIST_LOADING:
    case actions.FETCH_WISHLIST_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case actions.ADD_WISHLIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    case actions.FETCH_WISHLIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    case actions.ADD_WISHLIST_FAIL:
    case actions.FETCH_WISHLIST_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
};

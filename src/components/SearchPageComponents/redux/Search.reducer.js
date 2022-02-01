import * as actions from './Search.constant';

const initialState = {
  loading: false,
  error: null,
  data: [],
  provinces: [],
  searchingParams: '',
  prevSearchingMeta: [],
};

export const searchingReducers = (state = initialState, action) => {
  switch (action.type) {
    case actions.SEARCH_LIST_LOADING:
    case actions.META_SEARCH_LOADING:
    case actions.FETCH_PROVINCE_LOADING:
    case actions.FETCH_PROCRUMENT_LOADING:
    case actions.FETCH_ALL_TENDERS_BY_INTEREST_LOADING:
    case actions.FETCH_FILTER_INTEREST_DATA_LOADING:
      return {
        ...state,
        loading: true,
      };

    case actions.SEARCH_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };

    case actions.FETCH_ALL_TENDERS_BY_INTEREST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };

    case actions.FETCH_FILTER_INTEREST_DATA_LOADING:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };

    case actions.FETCH_PROVINCE_SUCCESS:
      return {
        ...state,
        loading: false,
        provinces: action.payload.data,
      };

    case actions.FETCH_PROCRUMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case actions.META_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };

    case actions.SET_SEARCH_META:
      return {
        ...state,
        loading: false,
        prevSearchingMeta: action.payload,
      };

    case actions.SET_SEARCH_PARAMS:
      return {
        ...state,
        loading: false,
        searchingParams: action.payload,
      };

    case actions.SEARCH_LIST_FAIL:
    case actions.META_SEARCH_FAIL:
    case actions.FETCH_PROVINCE_FAIL:
    case actions.FETCH_PROCRUMENT_FAIL:
    case actions.FETCH_ALL_TENDERS_BY_INTEREST_FAIL:
    case actions.FETCH_FILTER_INTEREST_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

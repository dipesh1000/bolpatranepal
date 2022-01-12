import * as actions from './Profile.contants';

const initialState = {
  loading: false,
  error: null,
  data: [],
  user: null,
};
export const profileReducers = (state = initialState, action) => {
  switch (action.type) {
    case actions.PROFILE_LOADING:
    case actions.FETCH_PROFILE_LOADING:
      return {
        ...state,
        loading: true,
      };

    case actions.PROFILE_SUCCESS:
      localStorage.setItem('user', JSON.stringify(action.payload.data));
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case actions.FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case actions.PROFILE_FAIL:
    case actions.FETCH_PROFILE_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};

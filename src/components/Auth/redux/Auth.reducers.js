import * as actions from './Auth.constants';

let user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  token: localStorage.getItem('token') || '',
  isAuthenticated: user ? true : false,
  isLoading: false,
  user: JSON.parse(localStorage.getItem('user')) || null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.USER_LOADING:
      return {
        ...state,
        isLoading: true,
        token: localStorage.getItem('token'),
        user: JSON.parse(localStorage.getItem('user')),
      };

    case actions.USER_LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        token: localStorage.getItem('token'),
        user: JSON.parse(localStorage.getItem('user')),
      };

    case actions.USER_REGISTER_SUCCESS:
      localStorage.setItem('user', JSON.stringify(action.payload));
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        user: localStorage.getItem('user'),
      };

    case actions.OTP_REQUEST_SUCCESS:
      return state;

    case actions.OTP_VERIFY_SUCCESS:
      return state;

    case actions.USER_LOGOUT_SUCCESS:
      localStorage.clear();
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };

    case actions.USER_LOGIN_FAIL:
    case actions.USER_REGISTER_FAIL:
    case actions.OTP_REQUEST_FAIL:
    case actions.OTP_VERIFY_FAIL:
    case actions.USER_LOGOUT_FAIL:
      // var myItem = localStorage.getItem('data');
      // localStorage.setItem('userData', myItem);
      localStorage.clear();

      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };

    default:
      return state;
  }
};

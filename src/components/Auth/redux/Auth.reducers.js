import * as actions from './Auth.constants';
const initialState = {
  token: localStorage.getItem('token') || '',
  isAuthenticated: false,
  isLoading: false,
  user: null,
  login:
    JSON.parse(localStorage.getItem('data')) ||
    JSON.parse(localStorage.getItem('userData')) ||
    '',
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
      localStorage.setItem('user', JSON.stringify(action.payload));
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        token: localStorage.getItem('token'),
        user: JSON.parse(localStorage.getItem('user')),
        login: JSON.parse(localStorage.getItem('data')),
      };

    case actions.USER_LOGIN_FAIL:
      var myItem = localStorage.getItem('data');
      localStorage.clear();
      localStorage.setItem('userData', myItem);

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

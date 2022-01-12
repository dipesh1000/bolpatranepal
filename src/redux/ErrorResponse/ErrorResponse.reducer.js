import * as actions from './ErrorResponse.constants';

const inititalState = {
  message: null,
};

export const errorResponseReducer = (state = inititalState, action) => {
  switch (action.type) {
    case actions.SET_ERROR:
      console.log(action?.payload?.message);
      return {
        message: action?.payload?.message,
      };

    case actions.CLEAR_ERROR:
      return {
        message: {},
      };

    default:
      return state;
  }
};

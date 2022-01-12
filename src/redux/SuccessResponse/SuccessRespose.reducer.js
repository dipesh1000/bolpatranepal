import * as actions from './SuccessResponse.constants';

const inititalState = {
  message: null,
};

export const successResponseReducer = (state = inititalState, action) => {
  switch (action.type) {
    case actions.SET_SUCCESS:
      console.log(action.payload.message);
      return {
        message: action.payload.message,
      };

    case actions.CLEAR_SUCCESS:
      return {
        message: {},
      };

    default:
      return state;
  }
};

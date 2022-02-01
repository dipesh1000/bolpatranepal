import * as actions from './Interest.constants';

const initialState = {
  isLoading: false,
  error: null,
  data: [],
  budgets: [],
  procurementCategories: [],
  projectTypes: [],
};
export const interestReducers = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_ALL_INTEREST_LOADING:
    case actions.USER_INTEREST_LOADING:
    case actions.FETCH_USER_INTEREST_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case actions.FETCH_ALL_INTEREST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        // data: [...action.payload.budgets, action],
        budgets: action.payload.budgets,
        procurementCategories: action.payload.procurementCategories,
        projectTypes: action.payload.projectTypes,
      };

    case actions.USER_INTEREST_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    case actions.FETCH_USER_INTEREST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        // budgets: action.payload.budgets,
        // procurementCategories: action.payload.procurementCategories,
        // projectTypes: action.payload.projectTypes,
      };

    case actions.FETCH_ALL_INTEREST_FAIL:
    case actions.USER_INTEREST_FAIL:
    case actions.FETCH_USER_INTEREST_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
};

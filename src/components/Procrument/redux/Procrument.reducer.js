import * as actions from './Procrument.constant';

const initialState = {
  loading: false,
  error: null,
  data: [],
  procrumentParams: [],
  tendorParams: [],
  projectTypeParams: [],
  singledata: null,
};
export const procrumentReducers = (state = initialState, action) => {
  switch (action.type) {
    case actions.PROCRUMENT_LOADING:
    case actions.SINGLE_PROCRUMENT_LOADING:
    case actions.PROCRUMENT_FILTER_LOADING:
    case actions.PROCRUMENT_BUDGET_LOADING:
    case actions.PROCRUMENT_PROJECT_TYPE_LOADING:
      return {
        ...state,
        loading: true,
      };

    case actions.PROCRUMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case actions.SINGLE_PROCRUMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        singledata: action.payload,
      };

    case actions.PROCRUMENT_BUDGET_SUCCESS:
      return {
        ...state,
        loading: false,
        budgetParams: action.payload,
      };

    case actions.PROCRUMENT_FILTER_SUCCESS:
      return {
        ...state,
        loading: false,
        procrumentParams: action.payload,
      };
    case actions.PROCRUMENT_PROJECT_TYPE_SUCCESS:
      return {
        ...state,
        loading: false,
        projectTypeParams: action.payload,
      };

    case actions.PROCRUMENT_FAIL:
    case actions.SINGLE_PROCRUMENT_FAIL:
    case actions.PROCRUMENT_FILTER_FAIL:
    case actions.PROCRUMENT_BUDGET_FAIL:
    case actions.PROCRUMENT_PROJECT_TYPE_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};

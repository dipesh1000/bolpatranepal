import { combineReducers } from 'redux';
import { modalReducer } from './Modal/Modal.reducer';
const rootReducer = combineReducers({
  modal: modalReducer,
});
export default rootReducer;

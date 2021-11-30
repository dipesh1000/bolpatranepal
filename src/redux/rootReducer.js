import { combineReducers } from 'redux';
import { authReducer } from '../components/Auth/redux/Auth.reducers';
import { modalReducer } from './Modal/Modal.reducer';
const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
});
export default rootReducer;

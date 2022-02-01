import { combineReducers } from 'redux';
import { adsReducers } from '../components/AdsManagement/redux/reducers';
import { authReducer } from '../components/Auth/redux/Auth.reducers';
import { procrumentReducers } from '../components/Procrument/redux/Procrument.reducer';
import { searchingReducers } from '../components/SearchPageComponents/redux/Search.reducer';
import { interestReducers } from '../components/UserDashboard/InterestBox/redux/Interest.reducers';
import { profileReducers } from '../components/UserDashboard/UserAboutBox/redux/Profile.reducers';
import { wishListReducers } from '../components/WishList/redux/reducer';
import { errorResponseReducer } from './ErrorResponse/ErrorResponse.reducer';
import { modalReducer } from './Modal/Modal.reducer';
import { successResponseReducer } from './SuccessResponse/SuccessRespose.reducer';
const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  success: successResponseReducer,
  error: errorResponseReducer,
  procrument: procrumentReducers,
  searchList: searchingReducers,
  profile: profileReducers,
  interest: interestReducers,
  ads: adsReducers,
  wishList: wishListReducers,
});
export default rootReducer;

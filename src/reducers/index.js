import { combineReducers } from 'redux';
import authreducer from './authReducer';
import memberReducer from './memberReducer';
import fetchReducer from './fetchReducer';
//-------------------------------------

export default combineReducers({
  authreducer: authreducer,
  memberreducer: memberReducer,
  fetchreducer: fetchReducer
});

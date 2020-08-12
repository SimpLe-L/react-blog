import sagaReducer from './saga/reducers';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
  ...sagaReducer,
});
  
  export default rootReducer;
import {combineReducers} from 'redux';
import { authReducer } from './authReducer';
import { quotesReducer } from './quotesReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  quotes: quotesReducer
});

export default rootReducer;

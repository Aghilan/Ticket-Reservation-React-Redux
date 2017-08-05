import { combineReducers } from 'redux';
import reservation from './reservation';
import user from './user';

const allReducer = combineReducers({
  reservation,
  user
});

export default allReducer;

import { combineReducers } from 'redux';
import reservation from './reservation';
import user from './user';
import seats from './seats';
import selected_seats from './selected_seats';

const allReducer = combineReducers({
  reservation,
  user,
  seats,
  selected_seats
});

export default allReducer;

import { combineReducers } from 'redux';
import reservation from './reservation';
import user from './user';
import seats from './seats';
import selected_seats from './selected_seats';
import profile from './profile';
import display_profile from './display_profile';

const allReducer = combineReducers({
  reservation,
  user,
  seats,
  selected_seats,
  profile,
  display_profile
});

export default allReducer;

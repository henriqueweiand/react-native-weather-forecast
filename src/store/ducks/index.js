import { combineReducers } from 'redux';

import weekForecast from './weekForecast';
import search from './search';

export default combineReducers({
  weekForecast,
  search,
});

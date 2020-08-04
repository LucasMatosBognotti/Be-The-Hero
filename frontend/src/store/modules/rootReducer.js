import { combineReducers } from 'redux';

import ong from './ong/reducer';
import incident from './incident/reducer';

export default combineReducers({
  ong,
  incident,
});
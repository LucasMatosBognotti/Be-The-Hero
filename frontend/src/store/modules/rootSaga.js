import { all } from 'redux-saga/effects';

import ong from './ong/sagas';
import incident from './incident/sagas';

export default function* rootSaga() {
  return yield all([ong, incident]);
}
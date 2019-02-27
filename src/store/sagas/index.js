import { all, takeLatest } from 'redux-saga/effects';

import { Types as weekForecastTypes } from '~/store/ducks/weekForecast';
import { Types as searchTypes } from '~/store/ducks/search';

import { getData as getDataWeek } from './weekForecast';
import { search } from './search';

export default function* rootSaga() {
  return yield all([
    takeLatest(weekForecastTypes.REQUEST, getDataWeek),
    takeLatest(searchTypes.REQUEST, search),
  ]);
}

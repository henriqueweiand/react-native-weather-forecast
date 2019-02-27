import { put, call } from 'redux-saga/effects';
import { NetInfo } from 'react-native';
import moment from 'moment';
import _ from 'lodash';

import api from '~/services/api';
import { Creators as weekForecastActions } from '~/store/ducks/weekForecast';

export function* getData(action) {
  const isConnected = yield call(NetInfo.isConnected.fetch);

  if (isConnected) {
    try {
      const response = yield call(api.get, `/forecast?id=${action.payload.term}`);

      const data = yield response.data.list.reduce((dates, item) => {
        const date = moment(item.dt_txt).format('DD-MM-YYYY');
        if (dates[date]) {
          dates[date].weekForecast.push(item);
        } else {
          dates[date] = { ...item, weekForecast: [item] };
        }
        return dates;
      }, {});

      const current = yield _.values(data)[0];
      yield put(weekForecastActions.weekForecastSuccess(data || [], current || {}));
    } catch (err) {
      yield put(
        weekForecastActions.weekForecastFailure('Erro ao buscar a previsão do tempo da cidade'),
      );
    }
  } else {
    yield put(weekForecastActions.getRequestFailure('Voce está offline'));
  }
}

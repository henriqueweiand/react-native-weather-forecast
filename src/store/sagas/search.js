import api from '~/services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as SearchActions } from '~/store/ducks/search';

export function* search(action) {
  try {
    const response = yield call(api.get, `/find?q=${action.payload.term}&type=like`);

    yield put(SearchActions.searchSuccess(response.data?.list || []));
  } catch (err) {
    yield put(SearchActions.searchFailure('Erro ao buscar as cidades'));
  }
}

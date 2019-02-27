import Immutable from 'seamless-immutable';

export const Types = {
  REQUEST: 'weekForecast/REQUEST',
  SUCCESS: 'weekForecast/SUCCESS',
  FAILURE: 'weekForecast/FAILURE',
  CURRENT: 'weekForecast/CURRENT',
};

const initialState = Immutable({
  current: {},
  data: {},
  loading: true,
  error: null,
});

export default function weekForecast(state = initialState, action) {
  switch (action.type) {
    case Types.CURRENT:
      return { ...state, current: action.payload.data };
    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.SUCCESS:
      return {
        data: action.payload.data,
        current: action.payload.current,
        loading: false,
        error: null,
      };
    case Types.FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

export const Creators = {
  setCurrent: data => ({
    type: Types.CURRENT,
    payload: { data },
  }),
  weekForecastRequest: term => ({
    type: Types.REQUEST,
    payload: { term },
  }),

  weekForecastSuccess: (data, current) => ({
    type: Types.SUCCESS,
    payload: { data, current },
  }),

  weekForecastFailure: error => ({
    type: Types.FAILURE,
    payload: { error },
  }),
};

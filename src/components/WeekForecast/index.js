import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as weekForecastActions } from '~/store/ducks/weekForecast';

import { FlatList } from 'react-native';
import WeekItem from '~/components/WeekItem';

const DaysList = ({ data, setCurrent }) => (
  <FlatList
    data={data}
    keyExtractor={dataItem => String(dataItem.dt_txt)}
    renderItem={({ item }) => <WeekItem data={item} onPress={() => setCurrent(item)} />}
  />
);

DaysList.propTypes = {
  setCurrent: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      dt_txt: PropTypes.string,
    }),
  ).isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(weekForecastActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(DaysList);

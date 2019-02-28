import React from 'react';
import PropTypes from 'prop-types';

import { StackActions, NavigationActions } from 'react-navigation';
import moment from 'moment';
import 'moment/locale/pt-br';

import { daysOfWeek, icons } from '~/config/utils';
import { TouchableOpacity, City, Temperature, Time, Day } from './styles';

const DayInfo = ({ data, navigation }) => (
  <TouchableOpacity
    onPress={() => {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Search' })],
      });
      navigation.dispatch(resetAction);
    }}
  >
    <Temperature>{`${parseInt(data.main.temp, 10)}°`}</Temperature>
    <Time>{icons[parseInt(data.weather[0].icon.substr(0, 2), 10)].label}</Time>
    <City>{data.city.name}</City>
    <Day>
      {`${daysOfWeek[moment(moment(data.dt_txt).format('YYYY-MM-DD')).weekday()]} / ${moment(
        data.dt_txt,
      ).format('MMMM, DD')}`}
    </Day>
  </TouchableOpacity>
);

DayInfo.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }).isRequired,
  data: PropTypes.shape({
    city: PropTypes.shape({
      name: PropTypes.string,
    }),
    main: PropTypes.shape({
      temp_max: PropTypes.number,
      temp: PropTypes.number,
    }),
    dt_txt: PropTypes.string,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default DayInfo;

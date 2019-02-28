import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import moment from 'moment';
import 'moment/locale/pt-br';

import Feather from 'react-native-vector-icons/Feather';
import { daysOfWeek, icons } from '~/config/utils';
import styles from './styles';

moment.locale('pt-BR');

const WeekItem = ({ data, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text style={styles.day}>{daysOfWeek[moment(moment(data.dt_txt).format('YYYY-MM-DD')).weekday()]}</Text>
    <Feather name={icons[parseInt(data.weather[0].icon.substr(0, 2), 10)].icon} size={22} color="#000" />

    <View style={styles.boxTemperature}>
      <Text style={styles.temperature}>
        {parseInt(data.main.temp_max, 10)}
°
      </Text>
      <Text style={styles.temperature}>
        {parseInt(data.main.temp_min, 10)}
°
      </Text>
    </View>
  </TouchableOpacity>
);

WeekItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  data: PropTypes.shape({
    main: PropTypes.shape({
      temp_max: PropTypes.number,
      temp_min: PropTypes.number,
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

export default WeekItem;

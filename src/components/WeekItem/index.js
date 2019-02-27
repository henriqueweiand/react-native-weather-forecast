import { View, Text, TouchableOpacity } from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br';
import Feather from 'react-native-vector-icons/Feather';
import React from 'react';

import { daysOfWeek, icons } from '~/config/utils';
// import PropTypes from 'prop-types';
import styles from './styles';

moment.locale('pt-BR');

const WeekItem = ({ data, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text style={styles.day}>{daysOfWeek[moment(moment(data.dt_txt).format('YYYY-MM-DD')).weekday()]}</Text>
    <Feather name={icons[parseInt(data.weather[0].icon.substr(0, 2), 10)].icon} size={30} color="#000" />

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

export default WeekItem;

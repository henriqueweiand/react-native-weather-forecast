import React from 'react';
// import PropTypes from 'prop-types';
import moment from 'moment';
import { View, Text } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import { icons } from '~/config/utils';

import styles from './styles';

const DayItem = ({ data, onPress }) => (
  <View onPress={onPress} style={styles.container}>
    <Text style={styles.time}>{moment(data.dt_txt).format('HH')}</Text>
    <Feather name={icons[parseInt(data.weather[0].icon.substr(0, 2), 10)].icon} size={30} color="#000" />
    <Text style={styles.temperature}>
      {parseInt(data.main.temp_max, 10)}
°
    </Text>
  </View>
);

export default DayItem;
